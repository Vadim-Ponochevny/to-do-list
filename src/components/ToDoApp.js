import NewTaskForm from './NewTaskForm';
import ToDoList from './ToDoList';
import DeleteDialog from './DeleteDialog';
import EditDialog from './EditDialog';
import ShareDialog from './ShareDialog';
import { useTodoLogic } from './useTodoLogic';
import { useDialogControls } from './useDialogControls';


export default function ToDoApp() {
    
    const { 
        todos, 
        addTask, 
        deleteTask, 
        updateTask 
    } = useTodoLogic();

    const {
        isDeleteModalOpen,
        todoToDeleteId,
        confirmRemoval,
        cancelRemoval,
        editingTodo,
        startEdit,
        finishEdit,
        isShareModalOpen, 
        todoToShare,     
        startShare,      
        cancelShare,
    } = useDialogControls();

    const handleConfirmDelete = () => {
        deleteTask(todoToDeleteId);
        cancelRemoval(); 
    };

    const handleUpdateTask = (id, newTitle, newAbout) => {
        updateTask(id, newTitle, newAbout);
        finishEdit(); 
    };

    return (
        <main className="main"> 
            <NewTaskForm addTask={addTask} /> 
            <ToDoList 
                todos={todos} 
                confirmRemoval={confirmRemoval} 
                startEdit={startEdit} 
                startShare={startShare}       
            />

            {isDeleteModalOpen && (
                <DeleteDialog
                    onConfirm={handleConfirmDelete}
                    onCancel={cancelRemoval} 
                />
            )}

            {editingTodo && (
                <EditDialog
                    todo={editingTodo} 
                    onSave={handleUpdateTask}
                    onCancel={finishEdit} 
                />
            )}
            {isShareModalOpen && todoToShare && (
                <ShareDialog
                    todo={todoToShare}
                    onCancel={cancelShare} 
                />
            )}
        </main>
    );
}