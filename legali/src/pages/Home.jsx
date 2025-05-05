import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroComponent from '../components/HeroComponent'
import WhyChooseUsComponent from '../components/WhyChooseUs'
import ServicesSection from '../components/OurServices'
import CTAHero from '../components/CTOFooter'
import Footer from '../components/FooterComponent'
import Layout from '../components/Layout'

function Home() {
  return (
    <div>
        <Layout >
        <NavbarComponent />
        <HeroComponent />
        <WhyChooseUsComponent />
        <ServicesSection />
        <CTAHero />
        <Footer />
        </Layout>
    </div>
  )
}

export default Home