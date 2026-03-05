import { useState } from 'react';
import localContent from '../../data/localContentData';
import useFetch from '../../hooks/useFetch';
import useMobile from '../../hooks/useMobile';
import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

function HeroSection() {
  const [randomContent] = useState(() => Math.floor(Math.random() * localContent.length));

  const deviceCompatibility = useMobile({ pixels: 768 });
  const contentData = localContent[randomContent];
  const dataF = useFetch({ id: contentData.tmdbID, type: contentData.type });

  //console.log(typeof(dataF.data?.created_by))
  //console.log(Array.isArray(dataF.data?.created_by))
  //console.log(dataF.data?.created_by?.[1])
  //console.log(dataF.data)
  console.log(dataF.data?.credits?.crew?.filter((w) => ['Executive Producer'].includes(w.job)).map((w) => w.name).slice(0,2).join(', '))
  //console.log(dataF.data?.credits?.crew?.filter((job) =>{ return  job.department === 'Writer' || job.known_for_department === 'Production'}).map((w)=>{return w.name}))
 


  return (
    <>
      {deviceCompatibility ? (
        <HeroMobile
          contentTitle={contentData.type === 'tv' ? dataF.data?.name : dataF.data?.title}
          contentDescription={dataF.data?.overview}
          contentRating={Math.round(dataF.data?.vote_average)}
          contentDuration={dataF.data?.runtime}
          contentStaring={dataF.data?.credits?.cast?.map((a) => a.name).slice(0, 3).join(', ')}
          contentWriters={dataF.data?.credits?.crew?.filter((w:any) => ['Writer', 'Screenplay', 'Story'].includes(w.job)).map((w:any) => w.name).join(', ')}
          contentRaterProvider='IMDb'
          contentGenre={dataF.data?.genres?.map((g) => g.name).join(', ')}
          contentUnderTitle={dataF.data?.tagline || dataF.data?.overview?.slice(0, 80) + '....'}
          contentDirector={dataF.data?.credits?.crew?.filter((d:any) => d.job === 'Director').map((d:any) => d.name).join(', ')}
          contentSRC={`https://image.tmdb.org/t/p/w780${dataF.data?.backdrop_path}`}
        />
      ) : (
        <HeroDesktop
          contentTitle={contentData.type === 'tv' ? dataF.data?.name : dataF.data?.title}
          contentAge={dataF.data?.release_dates?.results?.filter((country) => country.iso_3166_1 === 'DE')[0]?.release_dates[0]?.certification}
          contentReleaseDate={contentData.type === 'tv' ? dataF.data?.first_air_date.slice(0,4) : dataF.data?.release_date?.slice(0, 4)}
          contentDescription={dataF.data?.overview}
          contentRating={Math.round(dataF.data?.vote_average)}
          contentDuration={dataF.data?.runtime}
          contentStaring={dataF.data?.credits?.cast?.map((a) => a.name).slice(0, 3).join(', ')}
          contentWriters={
                    dataF.data?.credits?.crew?.filter((w) => ['Writer', 'Screenplay', 'Story'].includes(w.job)).map((w) => w.name).slice(0, 2).join(', ') ||
                    dataF.data?.credits?.crew?.filter((w) => w.department === 'Writing').map((w) => w.name).slice(0, 2).join(', ') ||
                    dataF.data?.credits?.crew?.filter((w) => ['Executive Producer'].includes(w.job)).map((w) => w.name).slice(0, 2).join(', ')
                  }
          contentRaterProvider='IMDb'
          contentGenre={dataF.data?.genres?.map((g) => g.name).join(', ')}
          contentUnderTitle={dataF.data?.tagline || dataF.data?.overview?.slice(0, 80) + '....'}
          contentDirector={contentData.type === 'tv' ? dataF.data?.created_by?.map((d) => d.name).join(', ') : dataF.data?.credits?.crew?.filter((d) => d.job === 'Director').map((d) => d.name).join(', ')}
          contentVideoSrc={contentData.videoID}
        />
      )}
    </>
  );
}

export default HeroSection;
