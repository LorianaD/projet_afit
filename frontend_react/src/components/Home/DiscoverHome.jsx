import HomeSection from "./HomeSection";
import { discover } from "../../data/home.js";

function DiscoverHome() {
    return (
        <HomeSection 
            data={discover} 
            id="discover" 
            variant="default"
        />
    );
}

export default DiscoverHome;