import AboutSection from "../components/HomeComponent/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HomeComponent/HeroSection";
import SingleCard from "../components/HomeComponent/SInglecard";


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