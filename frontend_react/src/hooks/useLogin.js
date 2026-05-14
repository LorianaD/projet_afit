import { useState } from "react";
import loginUser from "../services/auth/loginService";

function useLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitLogin = async () => {
        setError("");
        setMessage("");

        try {
            const result = await loginUser(formData);

            const token = result.data?.token;

            if (!token) {
                setError("Token non reçu");
                return { success: false };
            }

            localStorage.setItem("token", token);
            setMessage("Connexion réussie !");

            return { success: true };
        } catch (error) {
            console.error("Erreur :", error);
            setError(error.message);

            return { success: false };
        }
    };

    return {
        formData,
        error,
        message,
        handleChange,
        submitLogin,
    };
}

export default useLogin;