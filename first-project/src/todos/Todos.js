import React from 'react';

import Todo from './Todo';

export default function Todos(props) {
    // const todo = props.data;
    return (
        <div>
            <h3 className="todo-list-heading">Todo List</h3>
        {props.data.map((data,index)=>{
            return (
            <Todo todo={data} key={index} onDelete={props.onDelete}/>)
})}
        </div>
        )
}
