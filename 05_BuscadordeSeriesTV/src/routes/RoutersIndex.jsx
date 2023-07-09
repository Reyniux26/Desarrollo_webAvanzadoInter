import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound'
import Episodios from '../Components/Episodios'
import App from '../App'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Episodios/:id' element={<Episodios />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
