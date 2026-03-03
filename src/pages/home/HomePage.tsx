import Navbar from "../../components/navigation/navbar"


function HomePage() {

  

  return (
    <section id="home-page" aria-label="home page" className={`home-wrapper-main relative min-h-screen`}>
      <Navbar/>
      <video 
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  autoPlay 
  muted 
  loop
  playsInline
  style={{
    width: '100%',
    height: '100%',
    position: 'absolute',
    objectFit: 'cover'
  }}
/>
      
    </section>
  )
}

export default HomePage