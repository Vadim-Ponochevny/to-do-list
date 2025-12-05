
import { useState } from 'react';
import ToDoItem from './ToDoItem';



export default function ToDoList({ todos, confirmRemoval }) { 
    return (
        <ul className="todo__list"> 
            {todos.map((todo) => (
                <ToDoItem 
                    todo={todo} 
                    confirmRemoval={confirmRemoval}
                />
            ))}
        </ul>
    );
}