import React from 'react'

const Counter = ({todos}) => {

console.log(todos)

//const unCheckedTodos = todos.filter(element => !element.checked).length
const unCheckedTodos = todos.reduce((counter, element) => {

return (!element.checked) ? counter + 1 : counter

},0)

  return (
    <div className='flow-right controls'>
          <span>
            Cantidad de Tareas: <span id="item-count">{todos.length}</span>
          </span>
          <span>
            Tareas Pendientes: <span id="unchecked-count">{unCheckedTodos}</span>
          </span>


    </div>
  )
}

export default Counter