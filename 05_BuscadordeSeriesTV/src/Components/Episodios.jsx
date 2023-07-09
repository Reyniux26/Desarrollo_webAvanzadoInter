import React, { useState, useEffect } from 'react'

const Episodios = (id, url, name) => {
  const URL = `https://api.tvmaze.com/shows/${id}/episodes`
  const [episodios, setEpisodios] = useState([])
  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((results) => {
        console.log(results)
        setEpisodios(results)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>Episodios
      <main>
        <a href={URL}>Hola</a>
        <div className='col-md-6'>
          {episodios.map((epi) => (
            <div className='col' key={epi.id}>
              <div className='h-100 p-5 bg-body-tertiary border rounded-3'>
                <img
                  src={epi.image.original}
                  alt={epi.name}
                  className='card-img-top poster-image'
                />
                <p>{epi.summary}</p>
              </div>
            </div>

          ))}
        </div>
      </main>
    </div>

  )
}
export default Episodios
