import Hero from '../components/organisms/Hero'
import ServicesSection from '../components/organisms/ServicesSection'
import AboutSection from '../components/organisms/AboutSection'

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
    </>
  )
}
