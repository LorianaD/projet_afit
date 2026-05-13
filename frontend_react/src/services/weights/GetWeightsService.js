const API_URL = import.meta.env.VITE_API_URL;

async function getWeights(token) {
    const res = await fetch(`${API_URL}/weight`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Erreur lors du chargement");
    }

    return data;
}

export default getWeights;