import { useState, useEffect } from 'react'
import ProductCard from '../Components/ProuductCard'
import SearchBar from '../Components/SearchBar'
const ID = () => {
  const myRequest = new Request('../Isusses.json')
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((glasses) => {
        console.log(glasses)
        setData(glasses)
      }).catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <div className='container'>
      <SearchBar handleSearchChange={handleSearch} />
      <div className='row'>
        {
            filteredData.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}

export default ID

