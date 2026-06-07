import Navbar from "@/components/layout/Navbar"
import CompanySection from "./company"
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
        </>
    )
}

export default HomePage