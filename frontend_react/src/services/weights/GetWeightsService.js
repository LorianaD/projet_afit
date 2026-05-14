const API_URL = import.meta.env.VITE_API_URL;

async function getWeights(token) {
    const res = await fetch(`${API_URL}/weight`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    });

    const data = await res.json();

    return data;
}

export default getWeights;