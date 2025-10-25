
import { useLocation } from 'react-router'
function MoviesCategory() {

    const location = useLocation().pathname
    .replaceAll('/',' ')
    


  return (
    <div className='min-h-screen bg-blue-600'>{`Movies location = ${location}`}</div>
  )
}

export default MoviesCategory