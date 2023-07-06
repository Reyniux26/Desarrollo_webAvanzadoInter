const Poster = ({ id, type, name, url }) => {
  return (
    <div className='card'>
      <h2>{id}</h2>
      <h2 className='Titulo'>{name}</h2>
      <h5>Género: {type}</h5>
      <div className='Img-Poster'>
        <img src={url} />
      </div>
      <div className='col'>
        <div className='card shadow-sm'>
          <svg className='bd-placeholder-img card-img-top' xmlns={url} role='img' aria-label='Placeholder: Thumbnail' preserveAspectRatio='xMidYMid slice' focusable='false'><title>{name}</title><rect width='100%' height='100%' fill='#55595c' /><text x='50%' y='50%' fill='#eceeef' dy='.3em'>Thumbnail</text></svg>
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
