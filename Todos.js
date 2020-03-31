import React from 'react'

const Todos = (props) => {

  const todosList = props.todos.length ? (
    props.todos.map(todo => {
      return (
        <div key={todo.id} className="collection-item">
          <span onClick={() => props.deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">There is no todo left</p>
  )

  return(
    <div className="todos collection">
      {todosList}
    </div>
  )
}

export default Todos