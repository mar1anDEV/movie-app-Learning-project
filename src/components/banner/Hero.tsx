import { useState } from 'react';
import useMobile from '../../hooks/useMobile';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';
import contentBanners from '../../data/data';

function HeroSection() {
  const [randomContent] = useState(
    () => Math.floor(Math.random() * contentBanners.length)
  );

  const contentData = contentBanners[randomContent];
  const smDevice = useMobile({ pixels: 768 });

  if (!contentData) return null;

  return (
    <>
      {smDevice ? (
        <HeroMobile
          movieTitle={contentData.title}
          movieUnderTitle={contentData.undertitle}
          raterProvider={contentData.raterProviderImage}
          movieDuration={contentData.duration}
          movieDescription={contentData.description}
          movieStaring={contentData.starring.map((e: any) => e.name).join(', ')}
          movieGenre={contentData.genres.join(', ')}
          movieWriters={contentData.writers.map((e: any) => e.name).join(', ')}
          movieDirector={contentData.directors
            .map((e: any) => e.name)
            .join(', ')}
          movieRating={contentData.rating}
          contentSRC={contentData.moviePosterSm}
        />
      ) : (
        <HeroDesktop
          movieTitle={contentData.title}
          movieUnderTitle={contentData.undertitle}
          raterProvider={contentData.raterProviderImage}
          movieDuration={contentData.duration}
          movieDescription={contentData.description}
          movieStaring={contentData.starring.map((e: any) => e.name).join(', ')}
          movieGenre={contentData.genres.join(', ')}
          movieWriters={contentData.writers.map((e: any) => e.name).join(', ')}
          movieDirector={contentData.directors
            .map((e: any) => e.name)
            .join(', ')}
          movieRating={contentData.rating}
          videoSrc={contentData.videoID}
        />
      )}
    </>
  );
}

export default HeroSection;

// ============================================================================
// INACTIVE FILE - NOT IN USE
// ============================================================================
// This component is not currently being used in the application
// Keeping for reference or potential future use
// ============================================================================

//import useMobile from '../../hooks/useMobile';
//import { useState } from 'react';
//import HeroDesktop from './HeroDesktop';
//import HeroMobile from './HeroMobile';
//import contentBanners from '../../data/data';





//function HeroSection() {


  //const [randomContent] = useState(()=> Math.floor(Math.random() * contentBanners.length) + 1)

  
  //const contentData = contentBanners[randomContent]
  
  //const smDevice = useMobile({pixels: 768})

//console.log(contentData.duration)



  //return (
  //<>
    //{smDevice ? (
      //<HeroMobile
        //movieTitle={contentData.title}
        //movieUnderTitle={contentData.undertitle}
        //raterProvider={contentData.raterProviderImage}
        //movieDuration={contentData.duration}
        //movieDescription={contentData.description}
        //movieStaring={contentData.starring.map(e => e.name).join(', ')}
        //movieGenre={contentData.genres.join(', ')}
        //movieWriters={contentData.writers.map(e => e.name).join(', ')}
        //movieDirector={contentData.directors.map(e => e.name).join(', ')}
        //movieRating={contentData.rating}
        //contentSRC={contentData.moviePosterSm}
      ///>
    //) : (
      //<HeroDesktop
        //movieTitle={contentData.title}
        //movieUnderTitle={contentData.undertitle}
        //raterProvider={contentData.raterProviderImage}
        //movieDuration={contentData.duration}
        //movieDescription={contentData.description}
        //movieStaring={contentData.starring.map(e => e.name).join(', ')}
        //movieGenre={contentData.genres.join(', ')}
        //movieWriters={contentData.writers.map(e => e.name).join(', ')}
        //movieDirector={contentData.directors.map(e => e.name).join(', ')}
        //movieRating={contentData.rating}
        //videoSrc={contentData.videoID}
      ///>
    //)}
  //</>
//)



//}

//export default HeroSection