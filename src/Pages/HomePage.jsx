import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SingleCard from "../components/SInglecard";


const Homepage = () => {
    return ( 
        <div className="">
            <Header/>
            <HeroSection/>
            <SingleCard/>
            <AboutSection/>
            <Footer/>
        </div>
     );
}
 
export default Homepage;