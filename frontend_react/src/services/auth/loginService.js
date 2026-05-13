const API_URL = import.meta.env.VITE_API_URL;

async function loginUser(formData) {
    const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (!res.ok) {
        throw new Error("Email ou mot de passe incorrect");
    }

    return result;
}

export default loginUser;