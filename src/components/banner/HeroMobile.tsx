interface HeroMobileProps {
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
  contentSRC: string;
}

function HeroMobile({
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
  contentSRC,
}: HeroMobileProps) {
  return (
    <div className="bg-cyan-950 min-h-dvh p-4 text-white">
      <p>movieTitle: {movieTitle}</p>
      <p>movieUnderTitle: {movieUnderTitle}</p>
      <p>raterProvider: {raterProvider}</p>
      <p>movieDuration: {movieDuration}</p>
      <p>movieDescription: {movieDescription}</p>
      <p>movieStaring: {movieStaring}</p>
      <p>movieGenre: {movieGenre}</p>
      <p>movieWriters: {movieWriters}</p>
      <p>movieDirector: {movieDirector}</p>
      <p>movieRating: {movieRating}</p>
      <p>src: {contentSRC}</p>
    </div>
  );
}

export default HeroMobile;

// ============================================================================
// INACTIVE FILE - NOT IN USE
// ============================================================================
// This component is not currently being used in the application
// Keeping for reference or potential future use
// ============================================================================

//interface HeroDesktopProps {
  //movieTitle: string;
  //movieUnderTitle: string;
  //raterProvider: string;
  //movieDuration: number;
  //movieDescription: string;
  //movieStaring: string;
  //movieGenre: string;
  //movieWriters: string;
  //movieDirector: string;
  //movieRating?: number;
  //contentSRC: string
//}

//function HeroMobile({
  //movieTitle,
  //movieUnderTitle,
  //raterProvider,
  //movieDuration,
  //movieDescription,
  //movieStaring,
  //movieGenre,
  //movieWriters,
  //movieDirector,
  //movieRating,
  //contentSRC
//}: HeroDesktopProps) {
  //return (
    //<div className='bg-cyan-950 min-h-dvh p-4 text-white'>
      //<p>movieTitle: {movieTitle}</p>
      //<p>movieUnderTitle: {movieUnderTitle}</p>
      //<p>raterProvider: {raterProvider}</p>
      //<p>movieDuration: {movieDuration}</p>
      //<p>movieDescription: {movieDescription}</p>
      //<p>movieStaring: {movieStaring}</p>
      //<p>movieGenre: {movieGenre}</p>
      //<p>movieWriters: {movieWriters}</p>
      //<p>movieDirector: {movieDirector}</p>
      //<p>movieRating: {movieRating}</p>
      //<p>src: {contentSRC}</p>
    //</div>
  //)
//}

//export default HeroMobile;