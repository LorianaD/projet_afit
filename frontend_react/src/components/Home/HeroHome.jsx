import { SectionHero } from "../ui";
import { hero } from "../../data/home.js";

function HeroHome() {
    return (
        <SectionHero
            title={ hero.title }
            description={ hero.description }
            badge={ hero.badge }
            primaryBtn={ hero.primaryBtn }
            primaryLink={ hero.primaryLink }
            secondaryBtn={ hero.secondaryBtn }
            secondaryLink={ hero.secondaryLink }
            img={ hero.media }
        />
    )
}

export default  HeroHome;