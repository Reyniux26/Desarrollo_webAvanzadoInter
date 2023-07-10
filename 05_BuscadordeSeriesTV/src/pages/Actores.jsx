import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Actores = () => {
  const [cast, setCast] = useState([])
  const id = useParams().id

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((response) => response.json())
      .then((cast) => {
        setCast(cast)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  return (
    <div className='container'>
      {cast.map((actor) => (
        <div key={actor.person.id} className='box'>
          <img
            className='cast-image'
            src={actor.person.image?.medium}
            alt={actor.person.name}
          />
          <div className='description-cast'>
            <p>Actor: "{actor.person.name}"</p>
            <p>Character: "{actor.character.name}"</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Actores
