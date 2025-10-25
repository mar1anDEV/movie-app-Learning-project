import { menuLinks } from "../../constants/navigationData"
import { Link } from "react-router-dom"
import logoPNG from '../../assets/images/logo/logo.png';
import logoWEBP from '../../assets/images/logo/logo.webp';
import logoAvif from '../../assets/images/logo/logo.avif'
import { useEffect } from "react"

type MobileNavProp = {
    mobileNavActive: boolean,
    ariaHidden: boolean,
    handleOverlay: () => void
}

function MobileNav({mobileNavActive,ariaHidden,handleOverlay}: MobileNavProp){

    useEffect(() => {
    const handleEscape = (event) => {
        if (mobileNavActive && event.key === 'Escape') {
            handleOverlay()
        }
    }
    
    document.addEventListener('keydown', handleEscape)
    
    return () => {
        document.removeEventListener('keydown', handleEscape)
    }
}, [mobileNavActive, handleOverlay])
    


  return (
    <div id="navSM" aria-hidden={ariaHidden} className={`absolute md:hidden left-0 z-50 top-0 w-full min-h-screen transition-all duration-200 ease-in-out ${mobileNavActive ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div onClick={handleOverlay} className={`absolute bg-black inset-0 transition-opacity duration-1000 ${mobileNavActive ? 'opacity-70' : 'opacity-0'}`}></div>
        <div className={`bg-amber-500 absolute top-0 left-0 z-50 min-h-full w-5/6 flex flex-col justify-start transform transition-transform duration-500 ease-in-out ${mobileNavActive ? 'translate-x-0' : '-translate-x-full'}`}>
        <header className="p-4 bg-black">
            <div className={`image-holder w-[4.5rem] transform transition-transform duration-1000 ${mobileNavActive ? 'rotate-0' : '-rotate-45'}`}>
                <picture>
                    <source srcSet={logoAvif} type='image/avif' />
                    <source srcSet={logoWEBP} type="image/webp"/>
                    <img src={logoPNG} fetchPriority='high' alt="Website Logo" />
                </picture>
            </div>
        </header>
            <ul className="border-t border-b-black flex flex-col">
                {menuLinks.map((link,index)=>(
                    <li key={index} className="font-['Montserrat'] flex justify-between items-center text-start p-4 text-black font-medium text-xl border-b tracking-wide transition-all duration-200 ease-in-out hover:bg-amber-400">
                        <Link onClick={handleOverlay} to={link.path}>{link.name}</Link>
                        </li>
                ))}
            </ul>
        
        </div>
    </div>
  )
}

export default MobileNav