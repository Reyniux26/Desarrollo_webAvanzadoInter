import { useState } from 'react'
import ToDoItem from './ToDoltem'

const ToDoList = () => {
  // Los estados de React sirven para guardar infomración que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista autómaticamente cuando cambia el valor.
  // El primer elemento del arreglo e sel valor del estado y el segundo elemento es una función que permite modificar el valor del estado.

  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([]) // Lista de ToDos

  const handleAdd = () => {
    // El operador spread (...) permite copiar todos los elementos de un arreglo en otro arreglo
    const newTodos = [...todos, inputValue]
    setTodos(newTodos)
    setInputValue('')
  }

  const deleteItem = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Una forma común de trabajar con un input en React, es usar el evento onChange para guardar la información en el estado apenas sea tecleado. La información del input la tendra event.target.value */}

      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button onClick={handleAdd}>Agregar</button>

      <ul>
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            todo={todo}
            handleDelete={() => deleteItem(index)}
          />
        ))}
      </ul>
    </div>
  )
}
export default ToDoList