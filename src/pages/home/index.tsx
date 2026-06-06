import Navbar from "@/components/layout/Navbar"
import CompanySection from "./company"
import HeroSection from "./hero"
import ServicesSection from "./services"
import WhySection from "./why"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CompanySection />
            <ServicesSection />
            <WhySection />
        </>
    )
}

export default HomePage