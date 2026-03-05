import PageLayoutSpecial from "../layout/pageLayoutSpecial";

interface HeroMobileProps {
  contentTitle?: string;
  contentUnderTitle?: string;
  contentRaterProvider?: string;
  contentDuration?: number;
  contentDescription?: string;
  contentStaring?: string;
  contentGenre?: string;
  contentWriters?: string;
  contentDirector?: string;
  contentRating?: number;
  contentSRC?: string;
}

function HeroMobile({
  contentTitle,
  contentUnderTitle,
  contentRaterProvider,
  contentDuration,
  contentDescription,
  contentStaring,
  contentGenre,
  contentWriters,
  contentDirector,
  contentRating,
  contentSRC,
}: HeroMobileProps) {
  return (
    <PageLayoutSpecial classSpecial="bg-amber-400">
      <p>contentTitle: {contentTitle}</p>
      <p>contentUnderTitle: {contentUnderTitle}</p>
      <p>contentRaterProvider: {contentRaterProvider}</p>
      <p>contentDuration: {contentDuration}</p>
      <p>contentDescription: {contentDescription}</p>
      <p>contentStaring: {contentStaring}</p>
      <p>contentGenre: {contentGenre}</p>
      <p>contentWriters: {contentWriters}</p>
      <p>contentDirector: {contentDirector}</p>
      <p>contentRating: {contentRating}</p>
      <p>contentSRC: {contentSRC}</p>
    </PageLayoutSpecial>
  );
}

export default HeroMobile;