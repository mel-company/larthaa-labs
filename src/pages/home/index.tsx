import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import CompanySection from "./company"
import ContactSection from "./contact"
import HeroSection from "./hero"
import ProjectsSection from "./projects"
import ServicesSection from "./services"
import WhySection from "./why"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CompanySection />
            <ServicesSection />
            <ProjectsSection />
            <WhySection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default HomePage