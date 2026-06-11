import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import CompanySection from "./company"
import ContactSection from "./contact"
import HeroSection from "./hero"
import ProjectsSection from "./projects"
import ServicesSection from "./services"
import WhySection from "./why"
import LoadingPage from "@/components/loading-wrapper"
import { useState, useEffect } from "react"

const SESSION_KEY = "home-loading-done"

const HomePage = () => {
    const [done, setDone] = useState(() => {
        if (typeof window === "undefined") return false
        return sessionStorage.getItem(SESSION_KEY) === "true"
    })

    useEffect(() => {
        sessionStorage.setItem(SESSION_KEY, String(done))
    }, [done])


    return (
        <LoadingPage done={done} setDone={setDone}>
            <Navbar />
            <HeroSection />
            <CompanySection />
            <ServicesSection />
            <ProjectsSection />
            <WhySection />
            <ContactSection />
            <Footer />
        </LoadingPage>
    )
}

export default HomePage