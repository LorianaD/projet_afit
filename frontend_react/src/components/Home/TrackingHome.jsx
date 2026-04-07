import { tracking } from "../../data/home";
import HomeSection from "./HomeSection";

function TrackingHome() {
    return (
        <HomeSection
            data={ tracking }
            id="tracking"
            variant="accent"
        />
    )
}

export default TrackingHome;