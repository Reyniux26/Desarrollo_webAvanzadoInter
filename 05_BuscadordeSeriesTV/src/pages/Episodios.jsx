import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Episodios = () => {
  const { id } = useParams()
  const URL = `https://api.tvmaze.com/shows/${id}/episodes`
  const [episodios, setEpisodios] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.log('El id', id)
        console.log(results)
        setEpisodios(results)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  return (
    <div>
      <main>
        <div className='col-md-6'>
          {episodios.map((epi) => (
            <div className='col' key={epi.id}>
              <h2> {epi.season}</h2>
              <div className='h-100 p-5 bg-body-tertiary border rounded-3'>
                <img
                  src={epi.image.original} height='200' width='300'
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
