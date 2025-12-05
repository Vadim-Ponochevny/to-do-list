import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'todo-items';

export function useTodoLogic() {
    
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        } catch (error) {
            console.error("Ошибка сохранения в LocalStorage", error);
        }
    }, [todos]);

    const addTask = (title, about) => {
        if (!title || !about) return;

        const newTask = {
            id: crypto.randomUUID() ?? Date.now().toString(), 
            title: title,
            about: about,
        };
        
        setTodos(prevTodos => 
            [...prevTodos, newTask]
        ); 
    };

    const deleteTask = (id) => { 
        setTodos(prevTodos => 
            prevTodos.filter(todo => todo.id !== id)
        );
    };

    const updateTask = (id, newTitle, newAbout) => {
        setTodos(prevTodos => 
            prevTodos.map(todo => 
                todo.id === id 
                    ? { ...todo, title: newTitle, about: newAbout } 
                    : todo
            )
        );
    };
    
    return {
        todos,
        addTask,
        deleteTask,
        updateTask,
    };
}