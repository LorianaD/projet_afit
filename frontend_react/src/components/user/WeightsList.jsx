import { useEffect, useState } from "react";
import useWeights from "../../hooks/useWeights";
import { Navigate } from "react-router";
import SectionHeader from "../ui/SectionHeader";
import SectionContainer from "../ui/SectionContainer";
import WeightCard from "./WeightCard";

function WeightsList() {
    
    const token = localStorage.getItem("token");

    const { weights, stats, error } = useWeights(token);

    if (!token) {
        return <Navigate to="/login" />;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // +1 car 0 = janvier
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${day}-${month}-${year} ${hours}:${minutes}`;
    };

  return (
    <SectionContainer>
        <SectionHeader title="Historique"/>
        
        <div className="weights-list">

            {weights.map((weight) => (
                <WeightCard
                    key={weight.id}
                    weight={weight}
                    formatDate={formatDate}
                />
            ))}

        </div>
        
    </SectionContainer>
  )
}

export default WeightsList