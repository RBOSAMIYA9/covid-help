import React from 'react'
import Header from '../components/Header'
import Problem from '../components/Problem'
import HeroSection from '../components/HeroSection'
import Solution from '../components/Solutions'
import WhatsappSection from '../components/WhatsappSection'
import WhoCanDonate from '../components/WhoCanDonate'
import Faqs from '../components/Faqs'
import About from '../components/About'
import Footer from '../components/Footer'


function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <Problem />
            <Solution />

            <WhatsappSection />
            <WhoCanDonate />
            <Faqs />
            <About />
            <Footer />

        </>
    )
}

export default Home
