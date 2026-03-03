import React from 'react'

interface breakPointProp {
  pixels : number
}

function useMobile({pixels}: breakPointProp) {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < pixels);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < pixels);
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [pixels]);

  return isMobile;

}

export default useMobile;