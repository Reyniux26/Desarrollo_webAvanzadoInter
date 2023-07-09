import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '../routes/RoutersIndex'
import App from '../App'
const Poster = ({ id, type, name, url }) => {
  return (
    <div className='col-md-4'>
      <div className='card mb-4 shadow-sm'>
        <img src={url} alt={name} className='card-img-top' />
        <div className='card-body'>
          <h2 className='card-title'>{name}</h2>
          <h5 className='card-subtitle mb-2 text-muted'>Género: {type}</h5>
          <p className='card-text'>This content is a little bit longer.</p>
          <div className='d-flex justify-content-between align-items-center'>
            <div className='btn-group'>
              <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
            </div>
            <small className='text-muted'>9 mins</small>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <App />
        <RoutesIndex />
      </BrowserRouter>

    </div>
  )
}

export default Poster
