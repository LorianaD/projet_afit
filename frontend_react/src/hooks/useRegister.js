import { useState } from "react";
import registerUser from "../services/auth/RegisterService";

function useRegister() {

    const [formData, setFormData] = useState({
        name: "",
        firstname: "",
        username: "",
        email: "",
        password: "",
        birthday: "",
        height: "",
        gender: "",
        weight: "",
        goal: "",
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

    const submitRegister = async () => {

        setError("");
        setMessage("");

        const result = await registerUser(formData);

        if (!result.success) {

            setError(result.message);

            return { success: false };
        }

        setMessage("Compte créé avec succès !");

        return { success: true };
    };

    return {
        formData,
        error,
        message,
        handleChange,
        submitRegister,
    };
}

export default useRegister;