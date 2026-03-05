import HlsPlayer from '../layout/videoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons'

interface HeroDesktopProps {
  contentTitle: string;
  contentUnderTitle: string;
  contentReleaseDate: string;
  contentRaterProvider: string;
  contentDuration: number;
  contentDescription: string;
  contentStaring: string;
  contentGenre: string;
  contentWriters: string;
  contentDirector: string;
  contentRating?: number;
  contentAge: string;
  contentVideoSrc: string;
}

function HeroDesktop({
  contentTitle,
  contentReleaseDate,
  contentAge,
  contentUnderTitle,
  contentRaterProvider,
  contentDuration,
  contentDescription,
  contentStaring,
  contentGenre,
  contentWriters,
  contentDirector,
  contentRating,
  contentVideoSrc,
}: HeroDesktopProps) {
  return (
    <section role='content' className='hero-banner relative'>
      <div className="aspect-[16/9] md:aspect-[18/9] xl:aspect-[21/9] relative">
        <div className="absolute inset-0">
          <HlsPlayer muted={true} src={contentVideoSrc} />
        </div>
      </div>
      <div className='absolute z-10 inset-0 flex flex-col'>
        <div className='h-[64px] xl:h-[96px]'></div>
        <div className='grow relative'>
          <div className='absolute inset-0 bg-black opacity-10'></div>
          <div className='absolute inset-0'>
            <div className='wrapper absolute inset-0 w-3/6'>
                <div className='absolute inset-0 backdrop-blur-2xl [mask-image:linear-gradient(to_right,black_60%,transparent)] bg-gradient-to-r from-black/90 via-black/40 to-transparent'></div>
                <div className='absolute inset-0 bg-[linear-gradient(to_top,rgba(251,191,36,0.1)_0%,transparent_70%)] [mask-image:linear-gradient(to_right,black_50%,transparent)]'></div>                                  
            </div>
            <div className='absolute inset-0 w-[calc(100%-2rem)] xl:w-[calc(100%-12rem)] mx-auto'>
                  <section className='hero-wrapper absolute block inset-0'>
                          <div id='info-panel' className="info-panel absolute inset-0 pt-4 h-full overflow-hidden gap-[1rem]" style={{ zoom: 'clamp(0.6, 1.5vw + 0.3rem, 1)' }}>
                            <div className='flex flex-col justify-center w-fit h-full gap-[1rem]'>
                              <div className='announce w-fit flex items-center rounded-full border border-amber-500/40 bg-amber-500/20 px-4 py-1'>
                                  <span className='uppercase text-center font-semibold text-[11px] tracking-[2px] text-amber-400/90'>
                                      now streaming
                                  </span>
                              </div>
                                <div className='info-text inline-block w-fit'>
                                  <h1 className='title-banner font-bold text-white'>{contentTitle}</h1>
                                </div>

                                <div className='metadata-row inline-block w-fit'>
                                  <div className='flex flex-row gap-2 items-center'>
                                    <div className='content-year-wrapper p-1 px-[0.8rem] border border-gray-400'>
                                      <span className='content-year text-sm font-bold tracking-[1px] text-gray-400'>{contentReleaseDate}</span>
                                    </div>
                                    <div className='content-rating-wrapper'>
                                      <div className='content-rating text-gray-400'>{contentRating}</div>
                                    </div>
                                    <div className="content-rating-provider-wrapper">
                                      <div className="content-rating-provider px-3 py-[0.10rem] rounded-sm bg-amber-400">
                                        <span className='text-black/90 text-sm font-bold tracking-[1px]'>{contentRaterProvider}</span>
                                      </div>
                                    </div>
                                    <div className="age-restriction-display-wrapper border border-gray-400">
                                        <span className='text-gray-400 p-1 px-[0.8rem]'>{contentAge}+</span>
                                    </div>
                                    <div className='time-content-wrapper inline-block'>
                                      <div className='flex flex-row gap-1.5'>
                                        <FontAwesomeIcon className="text-md font-bold text-gray-400 my-auto" icon={faClock}/>
                                          <span className='text-sm text-gray-400 font-bold'>{contentDuration}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                    <div className='content-description inline-block w-fit'>
                                      <p className='text-gray-400 hidden lg:block text-[11px] lg:text-sm leading-relaxed max-w-prose font-bold'>{contentDescription}</p>
                                      <p className='text-gray-400 block lg:hidden text-[11px] lg:text-sm leading-relaxed max-w-prose font-bold'>{contentUnderTitle}</p>
                                    </div>
                                    <div className="info-crew-panel w-fit">
                                      <div className='flex flex-col gap-2'>
                                        <div className='info-crew-director inline-block'>
                                          <div className='flex flex-row gap-1 items-center'>
                                            <span className='key font-bold text-sm text-amber-400/95'>Director:</span>
                                            <span className='value font-bold text-sm text-gray-400'>{contentDirector}</span>
                                          </div>
                                        </div>
                                        <div className='info-cast inline-block'>
                                          <div className='flex flex-row gap-1 items-center'>
                                            <span className='key font-bold text-sm text-amber-400/95'>Cast:</span>
                                            <span className='value font-bold text-sm text-gray-400'>{contentStaring}</span>
                                          </div>
                                        </div>
                                        <div className='info-crew-writer inline-block'>
                                          <div className='flex flex-row gap-1 items-center'>
                                            <span className='key font-bold text-sm text-amber-400/95'>Writer:</span>
                                            <span className='value font-bold text-sm text-gray-400'>{contentWriters}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="panel-interaction-container lg:mt-4 w-fit">
                                      <div className='flex flex-row gap-2.5'>
                                        <button className='bg-amber-500 py-0! lg:py-3 px-3 lg:px-6 rounded-xl cursor-pointer transition-all duration-500 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-400/50 hover:-translate-y-1'><span className='font-bold tracking-[1px]'>▶ Play Now</span></button>
                                        <button className='px-6 py-3 rounded-xl text-[15px] font-semibold bg-white/8 border border-white/15 text-white hover:bg-white/12 hover:border-white/25 transition-all duration-300 cursor-pointer'>More Info</button>
                                      </div>
                                    </div>
                            </div>
                          </div>
                      </section> 
              </div> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroDesktop;