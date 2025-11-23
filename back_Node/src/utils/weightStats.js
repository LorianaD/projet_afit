// Trie un tableau de poids par date (de la plus ancienne à la plus récente)
function sortWeightsByDate(weights) {
    return [...weights].sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
}

// Renvoie la date de la première mesure (ou null)
function getFirstMeasureDate(weights) {
    if (!weights || weights.length === 0) return null;

    const ordered = sortWeightsByDate(weights);
    const first = ordered[0]; // première mesure

    return new Date(first.created_at);
}

// Renvoie le nombre de jours depuis la première mesure (ou null)
function getDaysSinceFirstMeasure(weights) {
    const firstDate = getFirstMeasureDate(weights);
    if (!firstDate) return null;

    const today = new Date();
    const diffMs = today - firstDate; // différence en millisecondes

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return days;
}

// Nombre total de mesures enregistrées
function getMeasuresCount(weights) {
    if (!weights) return 0;
    return weights.length;
}

// Poids le plus haut
function getMaxWeight(weights) {
    if (!weights || weights.length === 0) return null;

    const values = weights.map(w => Number(w.weight));
    return Math.max(...values);
}

// Poids le plus bas
function getMinWeight(weights) {
    if (!weights || weights.length === 0) return null;

    const values = weights.map(w => Number(w.weight));
    return Math.min(...values);
}

// Différence de poids sur les nbDays derniers jours
// > 0 = pris du poids, < 0 = perdu du poids
function getDiffLastDays(weights, nbDays) {
    if (!weights || weights.length < 2) return null;

    const ordered = sortWeightsByDate(weights);

    const now = new Date();
    const limit = new Date();
    limit.setDate(now.getDate() - nbDays); // aujourd'hui - nbDays

    // On garde seulement les mesures récentes
    const recent = ordered.filter(
        (w) => new Date(w.created_at) >= limit
    );

    if (recent.length < 2) return null;

    const first = Number(recent[0].weight);
    const last  = Number(recent[recent.length - 1].weight);

    const diff = last - first; // >0 = pris, <0 = perdu
    return Number(diff.toFixed(1)); // arrondi à 0.0
}

// 7 derniers jours
function getDiffLast7Days(weights) {
    return getDiffLastDays(weights, 7);
}

// 30 derniers jours
function getDiffLast30Days(weights) {
    return getDiffLastDays(weights, 30);
}

// Moyenne par semaine (kg/semaine)
function getAveragePerWeek(weights) {
    if (!weights || weights.length < 2) return null;

    const ordered = sortWeightsByDate(weights);
    const first = ordered[0];
    const last  = ordered[ordered.length - 1];

    const firstDate = new Date(first.created_at);
    const lastDate  = new Date(last.created_at);

    const diffMs   = lastDate - firstDate;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays <= 0) return null;

    const totalDiff = Number(last.weight) - Number(first.weight); // <0 = perte
    const weeks = diffDays / 7;

    if (weeks <= 0) return null;

    const avg = totalDiff / weeks;
    return Number(avg.toFixed(1));
}

// Moyenne par mois (kg/mois) (approx 30 jours)
function getAveragePerMonth(weights) {
    if (!weights || weights.length < 2) return null;

    const ordered = sortWeightsByDate(weights);
    const first = ordered[0];
    const last  = ordered[ordered.length - 1];

    const firstDate = new Date(first.created_at);
    const lastDate  = new Date(last.created_at);

    const diffMs   = lastDate - firstDate;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays <= 0) return null;

    const totalDiff = Number(last.weight) - Number(first.weight);
    const months = diffDays / 30;

    if (months <= 0) return null;

    const avg = totalDiff / months;
    return Number(avg.toFixed(1));
}

module.exports = {
    sortWeightsByDate,
    getFirstMeasureDate,
    getDaysSinceFirstMeasure,
    getMeasuresCount,
    getMaxWeight,
    getMinWeight,
    getDiffLastDays,
    getDiffLast7Days,
    getDiffLast30Days,
    getAveragePerWeek,
    getAveragePerMonth
};