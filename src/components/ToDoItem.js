import DeleteIcon from '../assets/cross.svg'; 
import ShareIcon from '../assets/share.svg';
import EditIcon from '../assets/edit.svg';
import { useState } from 'react';

export default function ToDoItem({ todo, confirmRemoval, startEdit, startShare }) { 
    
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const handleStartEdit = (event) => {
        event.stopPropagation();
        startEdit(todo); 
    };

    const handleStartShare = (event) => {
        event.stopPropagation();
        startShare(todo); 
    };

    return (
        <li key={todo.id} >
            <div 
                className="task__window"
                onClick={handleToggle} 
            >
                <div className="task__window__text">
                    <h3>{todo.title}</h3>
                    <p>{todo.about}</p>
                </div>
                
                <button 
                    className="task__window__button__dell"
                    onClick={(event) => {
                        event.stopPropagation(); 
                        confirmRemoval(todo.id);
                    }}
                >
                    <img src={DeleteIcon} />
                </button>
            </div>

            {isExpanded && (
                <div className="task__buttons">   
                    <button 
                        className="button__task__share" 
                        onClick={handleStartShare}
                    >
                        <img src={ShareIcon} />
                    </button>
                    <button 
                        className="button__task__info" 
                        onClick={(event) => event.stopPropagation()}
                    >
                        i
                    </button>

                    <button 
                        className="button__task__edit" 
                        onClick={handleStartEdit}
                    >
                        <img src={EditIcon} />
                    </button>
                </div>
            )}
        </li>
    );
}