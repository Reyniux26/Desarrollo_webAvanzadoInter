import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound'
import Episodios from '../Components/Episodios'
import App from '../App'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/App:id' element={<App />} />
      <Route path='/show' element={<Episodios />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
