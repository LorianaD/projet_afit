import Main from "../components/ui/Main.jsx"
import HeroHome from "../components/Home/HeroHome.jsx"
import DiscoverHome from "../components/Home/DiscoverHome.jsx"
import MethodsHome from "../components/Home/MethodsHome.jsx"
import BodyUnderstandingHome from "../components/Home/BodyUnderstandingHome.jsx"
import SeasonsHome from "../components/Home/SeasonsHome.jsx"
import TrackingHome from "../components/Home/TrackingHome.jsx"

function Home() {

  return (
    <Main>
      <HeroHome/>
      <DiscoverHome/>
      <MethodsHome/>
      <BodyUnderstandingHome/>
      <SeasonsHome/>
      <TrackingHome/>
    </Main>
  )
}

export default Home