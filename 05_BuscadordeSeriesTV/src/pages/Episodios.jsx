import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Actores from './Actores'
// file cap courrt

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
      <h1 className='header'>Serie {id}</h1>
      <div />
      <main>
        <div className='row row-cols-1 row-cols-md-4 g-4 align-items-stretch'>
          {episodios.map((epi) => (
            <div className='col' key={epi.id}>

              <div className='h-100 p-5 bg-body-tertiary border rounded-3'>
                <h2 className='titulo'> T {epi.season}</h2>
                <h2 className='titulo2'> ep:{epi.id}</h2>
                <img
                  src={epi.image.original} height='120' width='75'
                  alt={epi.name}
                  className='card-img-top poster-image'
                />
                <h2>{epi.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: epi.summary }} />
              </div>
            </div>

          ))}
        </div>
      </main>
      <div />
      <h1>CAST</h1>
      <div className='row row-cols-1 row-cols-md-4 g-4 align-items-stretch'>
        <Actores />
      </div>
    </div>

  )
}
export default Episodios
