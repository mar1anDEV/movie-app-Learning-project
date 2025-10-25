import Loader from './loader'
import logoPNG from '../../assets/images/logo/logo.png'
import logoAvif from '../../assets/images/logo/logo.avif'
import logoWEBP from '../../assets/images/logo/logo.webp'
function LoaderContainer() {
  return (
    <section className='bg-custom-memflix-primary bg-black loading-section flex justify-center items-center loader min-h-screen w-full'>
        <div className='container relative mx-auto h-fit p-4 w-full max-w-3xl'>
            <div className='absolute top-0 left-0 right-0 bottom-0 rounded-lg shadow-lg flex flex-col justify-center items-center'>
              <div className='mb-4 max-w-40 transition-all ease-in-out logo-animate'>
                <picture>
              <source srcSet={logoAvif} type='image/avif' />
              <source srcSet={logoWEBP} type="image/webp"/>
              <img 
              src={logoPNG}
              fetchPriority='high' 
              className="block w-full h-full object-cover" 
              alt="Movie Website Logo" 
              />
              </picture>
              </div>
              <div className="loader-component">
                <Loader />
              </div>
            </div>
        </div>
    </section>
  )
}

export default LoaderContainer