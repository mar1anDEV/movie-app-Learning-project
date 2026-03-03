import Loader from '../loaderComponent/loader'
function LoaderContainer() {
  return (
    <div aria-label='loading section' className='loading-screen min-h-screen relative'>
      <div className='absolute inset-0 flex flex-col'>
        <div className='h-[96px]'></div>
        <div className='relative grow'>
          <div className='absolute inset-0 bg-black/90'>
        <div className='absolute backdrop-blur-2xl inset-0'>
          <div className='absolute inset-0 flex justify-center items-center'>
            <Loader/>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default LoaderContainer