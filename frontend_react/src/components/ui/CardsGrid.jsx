import InfoCard from "./InfoCard";

function CardsGrid({ cards = [] }) {
    if (!cards.length) {
        return null;
    }

    return (
        <div className="cards-grid">
            {cards.map((card) => (
                <InfoCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                    img={card.img}
                    cta={card.cta}
                />
            ))}
        </div>
    );
}

export default CardsGrid;