import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound'
import Episodios from '../Components/Episodios'
import App from '../App'

const RoutesIndex = (id) => {
  return (
    <Routes>
      <Route path='http://localhost:5173/' element={<App />} />
      <Route path={`/Serie/${id}`} element={<Episodios />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
