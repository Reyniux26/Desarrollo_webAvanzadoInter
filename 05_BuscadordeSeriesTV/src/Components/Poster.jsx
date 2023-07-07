const Poster = ({ id, type, name, url }) => {
  return (
    <div className='card'>
      <h2>{id}</h2>
      <h2 className='Titulo'>{name}</h2>
      <h5>Género: {type}</h5>
      <div className='Img-Poster'>
        <img src={url} width='30%' height='20%' />
      </div>
      <div className='col'>
        <div className='card shadow-sm'>
          <div className='card-body'>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='btn-group'>
                <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
              </div>
              <small className='text-body-secondary'>9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster
