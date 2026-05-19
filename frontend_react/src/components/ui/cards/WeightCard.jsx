import { WeightItem } from "../index";

function WeightCard({ weight, formatDate }) {

    const evolution =
        weight.evolution === null || weight.evolution === undefined
            ? "—"
            : `${weight.evolution > 0 ? "+" : ""}${weight.evolution} kg`;

    const restToGoal =
        weight.restToGoal === null || weight.restToGoal === undefined
            ? "-"
            : `${weight.restToGoal} kg`;

    return (
        <article className="weight-card">

            <WeightItem>
                <p>{formatDate(weight.created_at)}</p>
            </WeightItem>

            <WeightItem title="Poids">
                <span>{weight.weight} kg</span>
            </WeightItem>

            <WeightItem title="Perte totale">
                <span>{evolution}</span>
            </WeightItem>

            <WeightItem title="IMC">
                {weight.imc ? (
                    <>
                        <span>{weight.imc.imc}</span>
                        <span>{weight.imc.category}</span>
                    </>
                ) : (
                    <span>-</span>
                )}
            </WeightItem>

            <WeightItem title="Encore">
                <span>{restToGoal}</span>
            </WeightItem>

        </article>
    );
}

export default WeightCard;