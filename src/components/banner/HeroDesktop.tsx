import HlsPlayer from '../layout/videoPlayer';

interface HeroDesktopProps {
  movieTitle: string;
  movieUnderTitle: string;
  raterProvider: string;
  movieDuration: number;
  movieDescription: string;
  movieStaring: string;
  movieGenre: string;
  movieWriters: string;
  movieDirector: string;
  movieRating?: number;
  videoSrc: string;
}

function HeroDesktop({
  movieTitle,
  movieUnderTitle,
  raterProvider,
  movieDuration,
  movieDescription,
  movieStaring,
  movieGenre,
  movieWriters,
  movieDirector,
  movieRating,
  videoSrc,
}: HeroDesktopProps) {
  return (
    <section
      role="content"
      className="bg-amber-600 hero-section -z-10 text-white py-10"
    >
      <div className="aspect-[16/9] lg:aspect-[21/9] relative">
        <div className="container-video absolute h-full w-full inset-0">
          <HlsPlayer muted={true} src={videoSrc} />
          <div className="overlay z-10 bg-black opacity-30 absolute inset-0" />
        </div>
      </div>

      <div className="relative z-20 max-w-4xl px-8 pt-8 space-y-2">
        <h1 className="text-3xl lg:text-5xl font-bold">{movieTitle}</h1>
        <p className="text-lg text-gray-200">{movieUnderTitle}</p>
        <p className="text-sm text-gray-300">
          {movieDuration} min • {movieGenre}
        </p>
        <p className="mt-4 text-sm text-gray-100">{movieDescription}</p>
        <p className="text-sm text-gray-200">Starring: {movieStaring}</p>
        <p className="text-sm text-gray-200">Writers: {movieWriters}</p>
        <p className="text-sm text-gray-200">Director: {movieDirector}</p>
        <p className="text-sm text-gray-200">Rated by: {raterProvider}</p>
        {movieRating != null && (
          <p className="text-sm text-amber-300">Rating: {movieRating}</p>
        )}
      </div>
    </section>
  );
}

export default HeroDesktop;

// ============================================================================
// INACTIVE FILE - NOT IN USE
// ============================================================================
// This component is not currently being used in the application
// Keeping for reference or potential future use
// ============================================================================

// Import React hooks for state management
//import { useState } from "react";
// Import custom HLS video player component
//import HlsPlayer from '../../components/layout/videoPlayer';
// Import texture image asset (currently unused)
//import texture from '../../assets/text/texture.jpg'

//
// TypeScript interface defining the props structure for HeroDesktop component
//
//interface HeroDesktopProps {
  // Movie title
 // movieTitle: string;
  // Movie subtitle
  //movieUnderTitle: string;
  // Rating provider name
  //raterProvider: string;
  // Duration in minutes
  //movieDuration: number;
  // Movie description
  //movieDescription: string;
  // Starring actors
  //movieStaring: string;
  // Movie genre
 // movieGenre: string;
  // Writers
 // movieWriters: string;
  // Director
  //movieDirector: string;
  // Optional rating number
  //movieRating?: number;
  // HLS video source URL
 // videoSrc: string;
//}

// Hero section component for desktop view
//function HeroDesktop({
  // Destructure movie title prop
  //movieTitle,
  // Destructure movie subtitle prop
  //movieUnderTitle,
  // Destructure rating provider prop
  //raterProvider,
  // Destructure movie duration prop
  //movieDuration,
  // Destructure movie description prop
  //movieDescription,
  // Destructure starring actors prop
  //movieStaring,
  // Destructure movie genre prop
  //movieGenre,
  // Destructure writers prop
  // movieWriters,
  // Destructure director prop
  //movieDirector,
  // Destructure optional rating prop
  //movieRating,
  // Destructure video source URL prop
  //videoSrc
// Type annotation for props
//}: HeroDesktopProps) {

  // State for audio control (currently unused)
  //const [audio,setAudio] = useState(false)

  //
  //
  //
  //

  // Return JSX
  //return (
    // Main hero section container with accessibility role
   // <section role="content" className='bg-amber-600 hero-section -z-10'>
    //  {/* Aspect ratio container - 16:9 default, 21:9 on large screens */}
     // <div className="aspect-[16/9] lg:aspect-[21/9] relative">
       // {/* Video container wrapper with absolute positioning */}
      //  <div className="container-video absolute h-full w-full bg-blue-300 inset-0">
         // {/* HLS video player component with muted audio */}
        //  <HlsPlayer muted={true}
           // Video source prop
         //  src={videoSrc}/>
         // {/* Dark overlay on top of video for contrast */}
         // <div className='overlay z-10 bg-black opacity-30 absolute inset-0'></div>
        //{/* End video container */}
        //</div>
     // {/* End aspect ratio container */}
      //</div>
      
    //{/* End section */}
   // </section>
  //)
//}
// Export component as default export
//export default HeroDesktop