import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import VirtualFramer from '../components/VirtualFramer'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Gallery />
      </div>
      <div id="virtual-framer">
        <VirtualFramer />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  )
}
