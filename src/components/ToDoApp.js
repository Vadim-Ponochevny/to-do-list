
import { useState, useEffect } from 'react';
import NewTaskForm from './NewTaskForm';
import ToDoList from './ToDoList';
import DeleteDialog from './DeleteDialog';

const LOCAL_STORAGE_KEY = 'todo-items';

export default function ToDoApp() {

    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);
    
    const addTask = (title, about) => {
        if (!title || !about) return;

        const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString(), 
            title: title,
            about: about,
        };
        
        setTodos(prevTodos => 
            [...prevTodos, newTask]
        ); 
    };

    useEffect(() => {
        console.log("Сохранение задач...");
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        } catch (error) {
            console.error("Ошибка сохранения в LocalStorage", error);
        }
    }, [todos]);

    const removeTask = (id) => {
        setTodos(prevTodos => 
            prevTodos.filter(todo => todo.id !== id)
        );
        setIsModalOpen(false);
        setTodoToDelete(null);
    };

    const confirmRemoval = (id) => {
        setTodoToDelete(id);
        setIsModalOpen(true); 
    };

    const cancelRemoval = () => {
        setIsModalOpen(false); 
        setTodoToDelete(null); 
    };

    const updateTask = (id, newTitle, newAbout) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: newTitle,
                        about: newAbout
                    };
                }
                return todo;
            });
        });
    };
    
    return (
        <main className="main"> 
            <NewTaskForm addTask={addTask} /> 
            
            <ToDoList 
                todos={todos} 
                confirmRemoval={confirmRemoval}
                updateTask={updateTask}
            />

            {isModalOpen && (
            <DeleteDialog
                onConfirm={() => removeTask(todoToDelete)} 
                onCancel={cancelRemoval} 
            />
        )}
        </main>
    );
}