
import { useState } from 'react';
import ToDoItem from './ToDoItem';



export default function ToDoList({ todos, removeTask }) { 
    return (
        <ul className="todo__list"> 
            {todos.map((todo) => (
                <ToDoItem 
                    todo={todo} 
                    key={todo.id} 
                    removeTask={removeTask}
                />
            ))}
        </ul>
    );
}