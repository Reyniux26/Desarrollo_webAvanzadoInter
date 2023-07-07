import { useState, useEffect } from 'react'
import Poster from './Components/Poster'
import './App.css'
import SearchBar from './Components/SearchBar'

const App = () => {
  const [pelis, setPelis] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  // const [searchTerm, setSearchTerm] = useState('')
  // const URL = 'https://www.tvmaze.com/api'

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results)
        setPelis(results)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const filteredData = pelis.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (

    <div>
      <SearchBar handleSearchChange={handleSearch} />
      <div>

        {
            filteredData.map((peli) => (
              <Poster
                key={peli.id}
                name={peli.name}
                type={peli.genres}
                url={peli.image.original}
              />
            ))
            }
      </div>
    </div>
  )
}

export default App
