import Navbar from "../../components/navigation/navbar"
import HeroSection from "../../components/banner/Hero"

function HomePage() {

  

  return (
    <section id="home-page" aria-label="home page" className={`home-wrapper-main relative min-h-screen`}>
      <Navbar/>
      <HeroSection></HeroSection>
      
    </section>
  )
}

export default HomePage