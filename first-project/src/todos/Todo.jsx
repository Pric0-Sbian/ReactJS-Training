import React from 'react'

export default function Todo({todo, onDelete}) {
    return (
        <div className="list-container">
            <h3>{todo.title}</h3>
            <p>{todo.body}</p>
            <button className="todo-btn" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
