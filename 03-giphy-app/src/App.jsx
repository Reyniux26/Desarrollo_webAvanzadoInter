// npm create vite@latest 04-piquito-de-oro -- --template react
import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'
import SearchBar from './Components/SearchBar'

function App () {
  const [gifs, setGifs] = useState([]) // Aqui guardo la lista de gifs
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

  // Las llamadas a la API se hacen en useEffect
  // UseEffect usa un arreglo de dependencias vacio para que solo se ejecute una vez cuando carguen mis componentes
  // las comillas invertidas sirven para que un string se convierta en string una variable
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}XXEuB3TTZUnefD2OS3e6Lg2FmE7Svne5&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  const sendSearch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=30&offset=0&rating=g&lang=es&bundle=messaging_non_clips`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }

  return (

    <div className='App'>
      <SearchBar handleSearch={sendSearch} />

      <div className='grid-cards'>
        {
          gifs.map((gif) => (
            <ImageCard
              key={gif.id}
              title={gif.title}
              url={gif.images.fixed_height.url}
            />
          ))
        }
      </div>
    </div>

  )
}

export default App
