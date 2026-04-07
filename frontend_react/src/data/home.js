import exerciceOutDoor from "../assets/background/exerciceOutDoor.png";
import meal from "../assets/img/meal.png";
import meal2 from "../assets/img/meal2.png";
import bodyMeasure from "../assets/img/bodyMeasure.png";
import meal3 from "../assets/img/meal3.jpg";
import protein from "../assets/img/protein.jpg";

const hero = {
    title : "Mieux manger, mieux comprendre, mieux progresser",
    description : "Conseils, méthodes, repères pratiques, contenus saisonniers, recettes et outils utiles pour apprendre à mieux prendre soin de soi au quotidien.",
    primaryBtn : "Découvrir les conseils",
    primaryLink: "/advice",
    secondaryBtn : "Commencer le suivi",
    secondaryLink: "/tracking",
    badge : "Nutrition • Habitudes • Compréhension du corps",
    media : exerciceOutDoor,
};

const discover = {
    title : "Explorez les essentiels du quotidien",
    description : "Des repères simples pour mieux manger, mieux comprendre votre corps et adopter des habitudes plus durables.",
    cta : "Explorer les conseils",
    link: "/advice",
    media : "",
    cards : [
        {
            id : "food-goals",
            title : "Différents objectifs alimentaires",
            description : "IG bas, sèche, stabilisation, repères nutritionnels.",
            link : "/advice/dietary-goals",
            img : meal,
        },
        {
            id : "meal-building",
            title : "Mieux construire ses repas",
            description : "Les bases pour composer des repas plus équilibrés.",
            link : "/advice/meal",
            img : meal2,
        },
        {
            id : "body-understanding",
            title : "Comprendre son corps",
            description : "Poids, masse grasse, masse musculaire, hydratation.",
            link : "/advice/understanding-your-body",
            img : bodyMeasure,
        },
    ]
}

const methods = {
    title : "Des méthodes concrètes pour passer à l’action",
    description : "Au-delà des conseils généraux, découvrez des repères simples et des bonnes pratiques à appliquer au quotidien.",
    cta : "Voir les guides",
    link : "/guides",
    media : "",
    cards : [
        {
            id : "balanced-meal",
            title : "Construire un repas équilibré",
            description : "Apprendre à composer une assiette simple et cohérente.",
            cta : "Voir le guide",
            link : "/guides/balanced-meals",
            img : meal3,
        },
        {
            id : "protein-role",
            title : "Comprendre le rôle des protéines",
            description : "Pourquoi elles sont importantes et comment les répartir.",
            cta : "Voir le guide",
            link : "/guides/proteins",
            img : protein,
        },
        {
            id : "progress-tracking",
            title : "Mieux suivre ses progrès",
            description : "Comprendre quoi observer au-delà du simple poids.",
            cta : "Voir le guide",
            link : "/guides/progress",
            img : "",
        },
        {
            id : "common-mistakes",
            title : "Éviter les erreurs fréquentes",
            description : "Repérer les excès, restrictions trop fortes et habitudes contre-productives.",
            cta : "Voir le guide",
            link : "/guides/errors",
            img : "",
        },
    ],
};

const bodyUnderstanding = {
    title : "Comprendre son corps pour mieux progresser",
    description : "Apprenez à lire vos données, à mieux sentir vos muscles et à mieux comprendre votre évolution.",
    media : "",
    cta : "Explorer le corps",
    link : "/body",
    cards : [
        {
            id : "body-data",
            title : "Comprendre ses données",
            description : "Poids, masse grasse, masse musculaire, hydratation et mensurations.",
            cta : "Comprendre",
            link : "/body/data",
            img : "",
        },
        {
            id : "muscles",
            title : "Comprendre ses muscles",
            description : "Groupes musculaires, contraction, décontraction et ressenti musculaire.",
            cta : "Comprendre",
            link : "/body/muscles",
            img : "",
        },
        {
            id : "morphology",
            title : "Comprendre sa morphologie",
            description : "Silhouette, répartition des masses et zones de stockage.",
            cta : "Comprendre",
            link : "/body/morphology",
            img : "",
        },
        {
            id : "weight-gain-types",
            title : "Comprendre sa prise de poids",
            description : "Mieux distinguer stockage, rétention, variations et progression réelle.",
            cta : "Comprendre",
            link : "/body/weight-gain",
            img : "",
        },
    ]
}

const seasonsAndTraditions = {
    title : "Manger avec les saisons et les périodes de l’année",
    description : "Produits de saison, repères locaux, traditions culinaires et idées adaptées aux différents moments de l’année.",
    cta : "Voir les saisons",
    link: "/saisons",
    media : "",
    cards : [
        {
            id : "seasonal-fruits",
            title : "Fruits et légumes de saison",
            description : "Mieux choisir selon les périodes.",
            cta : "Découvrir",
            link : "/seasons/fruit-and-vegetables",
            img : "",
        },
        {
            id : "seasonal-products",
            title : "Produits locaux et de saison",
            description : "Des repères utiles pour varier ses choix.",
            cta : "Découvrir",
            link : "/seasons/products",
            img : "",
        },
        {
            id : "traditions",
            title : "Traditions et périodes festives",
            description : "Découvrir des habitudes alimentaires liées aux cultures et aux saisons.",
            cta : "Découvrir",
            link : "/traditions",
            img : "",
        },    
    ],
}

const tracking = {
    title : "Un suivi pour compléter vos repères",
    description : "En complément des contenus conseils, utilisez un outil de suivi pour visualiser votre évolution dans le temps.",
    link: "/tracking",
    cta: "Découvrir le suivi",
    media : "",
};

export {
    hero,
    discover,
    methods,
    bodyUnderstanding,
    seasonsAndTraditions,
    tracking
};