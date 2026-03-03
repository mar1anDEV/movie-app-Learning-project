import { menuLinks } from '../../constants/navigationData';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Hamburger from '../common/hamburger';
import { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from "react-router";
import { movieGenres, seriesGenres } from '../../constants/navigationData';

function MobileNav() {
  const appName = useContext(AppContext);
  const pathLocation = useLocation().pathname;
  const navigate = useNavigate()
  const [getRef,setGetRef] = useState('');
  const date = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownSM, setDropDownSm] = useState(false)
  
  const handleNavigationSmDevices = () => {
    setIsOpen((prev) => !prev);
  };


  useEffect(()=>{
    if(!isOpen){
      setDropDownSm(false)
    }
  },[isOpen])


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);


  useEffect(() => {
    setIsOpen(false);
  }, [pathLocation]);



  const fetchLinks = (prop:string)=>{
    if(prop === 'mn-mov-01'){
      return movieGenres
    }
    else if (prop === 'mn-tv-01'){
      return seriesGenres
    }
    else return []
  }

  return (
    <div className="navSm-content block md:hidden z-50 absolute h-screen top-0 bottom-0 left-0 right-0" aria-label="mobile navigation" role="navigation">
      <div className="flex flex-col h-full gap-0 m-0 p-0">
        <div className="header-navSM backdrop-blur-[40px] w-full transition-all duration-300">
          <div className="header-wrapper-navSM bg-black/80 py-6 px-5 flex justify-between">
            <div className="navbar-brand w-fit">
              <Link to="/" className="cursor-pointer brand" aria-label="logo">
                <h1 className="brand">{appName}</h1>
              </Link> 
            </div>
            <div className="hamburger p-2 my-auto w-fit h-fit md:hidden">
              <Hamburger
                
                ariaExpanded={isOpen} 
                ariaControls="navSM"
                isChecked={isOpen}
                onClick={handleNavigationSmDevices}
                
              />
            </div>
          </div>
        </div>
        <div className="slide-container h-full relative">
          <div
            className={`slide-animate-container absolute top-0 right-0 left-0 bottom-0`}
          >
            <div className={`slide-wrapper backdrop-blur-[40px] h-full w-2/3 transform transition-transform duration-300 ease-in-out ${dropDownSM ? 'hidden' : 'block'} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <nav className="bg-black/70 h-full relative z-50">
                <ul
                  id="navSM"
                  className="nav-links absolute inset-0 flex flex-col gap-[1rem] mx-2 mt-6"
                >
                  {menuLinks.map((link) => {
                    const hasSubmenu = link.ref !== '';
                    
                    if (!hasSubmenu) {
                      return (
                        <li
                          onClick={()=>{navigate(link.path)}}
                          className={`w-full! py-3 px-4! relative! ${pathLocation === link.path ? 'bg-amber-400/20 rounded-xl flex justify-between items-center' : ''}`}
                          key={link.path}
                        >
                          
                          <Link aria-label={link.name} aria-current={pathLocation === link.path ? 'page' : undefined} tabIndex={isOpen ? 0 : -1}
                            className={`linkSM nav-text text-xl! ${
                              pathLocation === link.path ? 'text-amber-400!' : ''
                            } `}
                            to={link.path}
                          >
                            {link.name}
                          </Link>
                      
                            {pathLocation === link.path &&(<FontAwesomeIcon
                            className="text-amber-400 text-xl"
                            icon={faCaretRight}
                          />)}

                        </li>
                      );
                    }
                    if (hasSubmenu) {
                      
                      return (
                        <li key={link.path}><button
                          tabIndex={isOpen ? 0 : -1}
                          aria-label={link.name}
                          aria-current={pathLocation === link.path ? 'page' : undefined}
                          aria-haspopup="menu"
                          onClick={()=>{setDropDownSm(!dropDownSM); setGetRef(link.ref);}}
                          aria-expanded={dropDownSM}
                          aria-controls="ul-sm-child-btn-component"
                          type="button"
                          className="w-full nav-text p-2 px-4 text-xl! flex"
                        >
                          <span aria-label={link.name}>{link.name}</span>

                          <FontAwesomeIcon
                            className="text-xl my-auto"
                            icon={faCaretRight}
                          />
                        </button></li>
                      );
                      
                    }
                    return null;
                  })}
                  <li><footer className="mt-4">
                    <p className="text-sm text-gray-400">
                      &#169; {date} {appName}. All rights reserved.
                    </p>
                  </footer></li>
                </ul>
              </nav>
            </div>
            <div aria-hidden={!dropDownSM} className={`slide-wrapper-nav-child flex flex-col absolute inset-0 backdrop-blur-[40px] z-50 bg-black/70 h-full w-2/3 transform transition-transform duration-300 ease-in-out ${dropDownSM ? 'translate-x-0' : '-translate-x-full'}`}>
                  
                    <div className='btn-back block w-full p-4 bg-amber-400/40'>
                      <button>Main Menu</button>
                    </div>
                  <div className="subnav-container h-full relative">
                    <ul id='ul-sm-child-btn-component' className='nav-links overflow-y-scroll absolute! inset-0 flex flex-col gap-[1rem] mx-2 !'>
                      {fetchLinks(getRef).map((subLink)=>{
                        
                        return(<li
                          
                          className={`w-full! py-3 px-4! relative! ${pathLocation === subLink.path ? 'bg-amber-400/20 rounded-xl flex justify-between items-center' : ''}`}
                          key={subLink.path}
                        >
                          
                          <Link
                            tabIndex={isOpen ? 0 : -1}
                            className={`linkSM nav-text text-xl! block w-full ${
                              pathLocation === subLink.path ? 'text-amber-400!' : ''
                            } `}
                            to={subLink.path}
                          >
                            {subLink.name}
                          </Link>
                      
                            {pathLocation === subLink.path &&(<FontAwesomeIcon
                            className="text-amber-400 text-xl"
                            icon={faCaretRight}
                          />)}

                        </li>)
                      })}
                  </ul>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;

