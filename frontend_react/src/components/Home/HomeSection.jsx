import SectionContainer from "../ui/SectionContainer";
import SectionHeader from "../ui/SectionHeader";
import CardsGrid from "../ui/CardsGrid";

function HomeSection({ data, id, variant = "default", className = "", headerAlign = "left" }) {
    return (
        <SectionContainer id={id} variant={variant} className={className} >

            <SectionHeader title={data.title} description={data.description} link={data.link} cta={data.cta} align={headerAlign}/>
            <CardsGrid cards={data.cards}/>

        </SectionContainer>
    );
}

export default HomeSection;