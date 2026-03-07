import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  )
}
