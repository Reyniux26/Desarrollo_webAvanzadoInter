import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Faq from '../Pages/Fac'
import Product from '../Pages/Product'
import NotFound from '../Pages/NotFound'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
