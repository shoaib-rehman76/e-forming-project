import AnimateSection from "../../components/animate-section/AnimateSection"
import Navbar from "../../components/navbar/Navbar"
import HeroSection from "../../components/hero-section/HeroSection"
import SectionTwo from "../../components/section-2/SectionTwo"
import SectionThree from "../../components/section-3/SectionThree"
import SectionFour from "../../components/section-4/SectionFour"
import SectionFive from "../../components/section-5/SectionFive"
import ContactUs from '../../components/contact-us/ContactUs'
import Footer from '../../components/footer-section/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AnimateSection />
            <div id='about-us' className="container" style={{ marginTop: '25rem' }}>
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <ContactUs />
                <Footer />
            </div>
        </>
    )
}

export default Home
