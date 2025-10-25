import { Link } from 'react-router-dom';
import '../../fonts/fonts.css';
import logoPNG from '../../assets/images/logo/logo.png';
import logoWEBP from '../../assets/images/logo/logo.webp';
import logoAvif from '../../assets/images/logo/logo.avif'
import Hamburger from '../common/hamburger';
import { menuLinks } from '../../constants/navigationData';
import MobileNav from './MobileNav';
import { useState } from 'react';

function Navigation() {

    
    const [isOpen, setIsOpen] = useState(false)

    const handleNavigationSmDevices = () =>{
        setIsOpen(!isOpen)
    }



    return (
        <header className="header-navbar-holder text-center bg-black w-full" role="banner">
            <nav className="navbar relative flex items-center justify-center h-full w-full" aria-label="Main Navigation">
                <div className="container-navbar grow md:grow-0 sm:max-w-[97%] md:max-w-[98%] lg:max-w-[90%]">
                    <div className="links-holder min-w-full flex flex-col md:flex-row justify-center gap-3.5 flex-wrap">
                        <div className="flex p-2 w-full xl:w-auto justify-between items-center">
                            {/* Logo */}
                            <div className="navbar-brand w-22 inline-block mr-6">
                                <Link to="/">
                                    <div className="logo p-2 transition-all duration-600">
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
                                </Link>
                            </div>
                            
                            <ul className="nav-links--desktop hidden md:flex h-fit my-auto grow gap-2">
                                {menuLinks.map((link, index) => (
                                    <li 
                                        key={index} 
                                        className="nav-link cursor-pointer font-['Montserrat'] font-medium text-gray-100 lg:text-base tracking-tighter lg:tracking-wide p-2 hover:text-yellow-500 transition-colors duration-300"
                                    >
                                        <Link to={link.path}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className='hamburger md:hidden'>
                                <Hamburger ariaExpanded={isOpen} ariaControls='navSM' isChecked={isOpen} onClick={handleNavigationSmDevices}/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <MobileNav ariaHidden={!isOpen}  handleOverlay={handleNavigationSmDevices} mobileNavActive={isOpen}></MobileNav>
        </header>
    );
}

export default Navigation;