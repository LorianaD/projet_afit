const API_URL = import.meta.env.VITE_API_URL;

async function registerUser(formData) {
    const res = await fetch(`${API_URL}/auth/register`, { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const result = await res.json();

    return result;
}

export default registerUser;