import { useEffect, useState } from "react";
import getWeights from "../services/weights/GetWeightsService";


function useWeights(token) {

    const [weights, setWeights] = useState([]);
    const [stats, setStats] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        if (!token) return;

        const loadWeights = async () => {

            try {

                const data = await getWeights(token);

                setWeights(data.data);
                setStats(data.stats);

            } catch (error) {

                console.error(error);

                setError(error.message);
                setWeights([]);
                setStats(null);
            }
        };

        loadWeights();

    }, [token]);

    return { weights, stats, error };
}

export default useWeights;