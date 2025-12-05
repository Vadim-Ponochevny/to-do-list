
import { useState } from 'react';
import ToDoItem from './ToDoItem';



export default function ToDoList({ todos, confirmRemoval, startEdit, startShare }) { 
    return (
        <ul className="todo__list"> 
            {todos.map((todo) => (
                <ToDoItem 
                    todo={todo} 
                    confirmRemoval={confirmRemoval}
                    startEdit={startEdit}
                    startShare={startShare}
                />
            ))}
        </ul>
    );
}