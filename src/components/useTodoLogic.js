
import { useSelector, useDispatch } from 'react-redux';
import { 
    addTodo, 
    deleteTodo, 
    updateTodo, 
    togglePin, 
    reorderTodos 
} from '../store/todoSlice';

export function useTodoLogic() {
    const dispatch = useDispatch();
    
    const todos = useSelector((state) => state.todos.items);

    const addTask = (title, about) => {
        if (!title || !about) return;
        dispatch(addTodo({ title, about }));
    };

    const deleteTask = (id) => {
        dispatch(deleteTodo(id));
    };

    const updateTask = (id, newTitle, newAbout) => {
        dispatch(updateTodo({ id, title: newTitle, about: newAbout }));
    };

    const pinTask = (id) => {
        dispatch(togglePin(id));
    };

    const setReorderedTodos = (newList) => {
        dispatch(reorderTodos(newList));
    };

    return {
        todos,
        addTask,
        deleteTask,
        updateTask,
        pinTask: (id) => dispatch(togglePin(id)),       
        setReorderedTodos 
    };
}