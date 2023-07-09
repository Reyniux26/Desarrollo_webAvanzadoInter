import { Route, Routes } from 'react-router-dom'
import Pelicula from '../Pages/About'
import Actores from '../pages/Actores'
import NotFound from '../Pages/NotFound'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/pelicula' element={<Pelicula />} />
      <Route path='/Actores' element={<Actores />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
