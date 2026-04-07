import HomeSection from "./HomeSection";
import { methods } from "../../data/home";

function MethodsHome() {
    return (
        <HomeSection 
            data={ methods } 
            id="methods" 
            variant="soft"
        />
    );
}

export default MethodsHome;