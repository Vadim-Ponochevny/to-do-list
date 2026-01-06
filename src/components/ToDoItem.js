import DeleteIcon from '../assets/cross.svg'; 
import ShareIcon from '../assets/share.svg';
import EditIcon from '../assets/edit.svg';
import { useState } from 'react';

export default function ToDoItem({ 
    todo, 
    confirmRemoval, 
    startEdit, 
    startShare, 
    pinTask 
}) { 
    
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

    const handlePin = (event) => {
        event.stopPropagation(); 
        pinTask(todo.id); 
    };

    return (
        <li key={todo.id} className={todo.isPinned ? 'task__item__pinned' : ''}>
            <div 
                className="task__window"
                onClick={handleToggle} 
            >
                <div className="task__window__text">
                    <h3>{todo.title}</h3>
                    <p>{todo.about}</p>
                </div>

                <div className="task__window__actions">
                    <button 
                        className={`task__window__button__pin ${todo.isPinned ? 'active' : ''}`}
                        onClick={handlePin}
                    >
                        {todo.isPinned ? 'Открепить' : 'Закрепить'}
                    </button>
                    
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