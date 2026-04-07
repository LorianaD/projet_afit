import HomeSection from "./HomeSection";
import { bodyUnderstanding } from "../../data/home";

function BodyUnderstandingHome() {
    return (
        <HomeSection 
            data={bodyUnderstanding}
            id="body-understanding"
            variant="default"
        />
    )
}

export default BodyUnderstandingHome;