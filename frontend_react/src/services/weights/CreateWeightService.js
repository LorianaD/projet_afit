const API_URL = import.meta.env.VITE_API_URL;

async function createWeight(formData, token) {

    const res = await fetch(`${API_URL}/weight`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    return data;
}

export default createWeight;