import HomeSection from "./HomeSection";
import { seasonsAndTraditions } from "../../data/home";

function SeasonsHome() {
    return (
        <HomeSection 
            data={seasonsAndTraditions}
            id="seasons"
            variant="soft"
        />
    )
}

export default SeasonsHome;