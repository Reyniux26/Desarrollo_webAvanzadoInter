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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = issues.filter((issue) => {
    return issue.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  useEffect(() => {
    showData()
  }, [])

  const handleTitleClick = (issue) => {
    window.open(issue.html_url, '_blank')
  }

  const columns = [
    {
      name: 'ID',
      selector: 'id'
    },
    {
      name: 'NAME',
      selector: 'user.login'
    },
    {
      name: 'TITULO',
      selector: 'title',
      cell: (row) => <span onClick={() => handleTitleClick(row)}>{row.title}</span>
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
