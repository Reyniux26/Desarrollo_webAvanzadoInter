import React, { useState, useEffect } from 'react'
const URL = `https://api.tvmaze.com/shows/${id}/episodes`
const Episodios = () => {
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
      <div className='col-md-6'>
        {episodios.map((epi) => (
          <div className='col' key={epi.id} />
        ))}

        <div className='h-100 p-5 bg-body-tertiary border rounded-3'>
          <h2>Add borders</h2>
          <p>
            Or, keep it light and add a border for some added definition to the
            boundaries of your content. Be sure to look under the hood at the source
            HTML here as we've adjusted the alignment and sizing of both column's
            content for equal-height.
          </p>
          <button className='btn btn-outline-secondary' type='button'>
            Example button
          </button>
        </div>
      </div>

    </div>

  )
}

export default Episodios
