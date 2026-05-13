import { useState } from "react";
import createWeight from "../services/weights/CreateWeightService";

function useAddWeight() {

    const [formData, setFormData] = useState({
        weight: ""
    });

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitWeight = async () => {

        setError("");
        setMessage("");

        const token = localStorage.getItem("token");

        try {

            const data = await createWeight(formData, token);

            setMessage("Poids enregistré");

            return {
                success: true,
                data
            };

        } catch (error) {

            console.error(error);

            setError(error.message);

            return {
                success: false
            };
        }
    };

    return {
        formData,
        error,
        message,
        handleChange,
        submitWeight
    };
}

export default useAddWeight;