import { Route, Routes } from 'react-router-dom'
import Actores from '../pages/Actores'
import NotFound from '../Pages/NotFound'
import Episodios from '../Components/Episodios'
import Movie from '../Components/Movie'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/pelicula' element={<Episodios />} />
      <Route path='/Actores' element={<Movie />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
