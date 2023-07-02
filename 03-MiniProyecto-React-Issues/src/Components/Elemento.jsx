

function Elemento= ({ id, title,  url, nombre }) => { 
  return
   (
    <div className='col-md-3 my-3 d-flex align-items-stretch'>
        <div className='card'>
          <a href={`/product/${id}`}>
            <div className='image-container'>
            </div>
          </a>
          <div className='card-body d-flex flex-column justify-content-between'>
            <div>
              <h5 className='card-title' onClick={url}>{title}</h5>
            </div>
  
            <div className='mx-auto mt-3'>
              <p className='card-nombre'>${nombre}</p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Elemento
