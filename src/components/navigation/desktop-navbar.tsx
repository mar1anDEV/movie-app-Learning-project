import { Link } from 'react-router-dom';
import { useContext } from 'react';
import '../../fonts/fonts.css';
import { menuLinks } from '../../constants/navigationData';
import { AppContext } from '../../context/AppContext';

function DesktopNavbar() {
  const appName = useContext(AppContext);

  return (
    <header className="header-navbar-holder hidden md:block absolute left-0 right-0 backdrop-blur-[40px] z-50 w-full transition-all duration-300">
      <div className="wrapper">
        <div className="nav-container relative bg-black/80 py-6 w-full transition-all duration-300">
          <nav className="w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] hidden sm:flex justify-between mx-auto transition-all duration-300">
            <div className="navbar-brand w-fit">
              <Link to="/" className="cursor-pointer" aria-label="logo">
                <h1 className="brand">{appName}</h1>
              </Link>
            </div>
            <div className="ul-list flex mr-0 xl:mr-6">
              <ul className="nav-links-desktop hidden md:block h-fit my-auto">
                {menuLinks.map((link) => {
                  return (
                    <li
                      key={link.path}
                      className="nav-link nav-text-1 group mx-4 relative inline-block cursor-pointer"
                    >
                      <Link to={link.path}>
                        <span className="nav-text group-hover:!text-amber-500">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default DesktopNavbar;