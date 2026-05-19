import { Main, SectionHero } from "../../components/ui";
import { hero } from "../../data/advicesPages/dietaryGoals";

function DietaryGoals() {
    return (
        <Main variant="home">
            <SectionHero title={hero.title} description={hero.description} badge={hero.badge} img={hero.img}/>
        </Main>
    )
}

export default DietaryGoals;
