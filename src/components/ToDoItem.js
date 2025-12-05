import DeleteIcon from '../assets/cross.svg'; 

export default function ToDoItem({ todo, confirmRemoval, onUpdate }) {
    
    // В будущем здесь будет логика режима редактирования

    return (
        <li key={todo.id}>
            <div className="task__window">
                <div className="task__window__text">
                    <h3>{todo.title}</h3>
                    <p>{todo.about}</p>
                </div>
                <button 
                    className="task__window__button__dell"
                    onClick={() => confirmRemoval(todo.id)}
                >
                    <img src={DeleteIcon} />
                </button>
            </div>
        </li>
    );
}