import Search from '../src/Components/SearchBar'
import { useState, useEffect } from 'react'
import './App.css'
import DataTable from 'react-data-table-component'

const App = () => {
  const [issues, setIssues] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const URL = 'https://api.github.com/repos/facebook/react/issues'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setIssues(data)
  }
// BARRA DE BUSQUEDA, FUNCION DE COMPARAR
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
//IMPRIME LA COMPARACION CON RESPECTO LA INFORMACIÓN
  const filteredData = issues.filter((issue) => {
    return issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
//MUESTRA INFORMACION
  useEffect(() => {
    showData()
  }, [])
//FUNCION PARA REDIRECCIONAR AL MOMENTO DE HACER ONCLICK EN EL TITULO
  const handleTitleClick = (issue) => {
    window.open(issue.html_url, '_blank')
  }

  const columns = [
    {
      name: 'ID',
      selector: 'id'
    },
    {
      name: 'TITULO',
      selector: 'title',
      cell: (row) => <span onClick={() => handleTitleClick(row)}>{row.title}</span>
    },
    {
      name: 'NAME',
      selector: 'user.login'
    },
    {
      name: 'LABELS',
      selector: 'labels',
      cell: (row) => row.labels.map((label) => label.name).join(', ')
    }
  ]

  return (
    <div>
      <div className='Search-bar'>
        <Search handleSearchChange={handleSearch} />
      </div>
      <h1>Tabla de issues</h1>
      <DataTable columns={columns} data={filteredData} />
    </div>
  )
}

export default App
