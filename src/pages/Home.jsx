import About from "../About/about";
import HeroSlider from "../component/heroslider";
import Ourprocess from "../component/OurProcess";
import OurProject from "../component/OurProject";
import OurServices from "../component/OurServices";
import Subscribe from "../component/Subscribe";

const Home=()=>{
    return(
        <>
        <HeroSlider/>
        <About/>
        <OurServices/>
        <OurProject/>
        <Ourprocess/>
        <Subscribe/>
</>
    )
}
export default Home;