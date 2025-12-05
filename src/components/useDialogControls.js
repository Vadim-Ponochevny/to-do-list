import { useState } from 'react';

export function useDialogControls() {
    
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
    const [todoToDeleteId, setTodoToDeleteId] = useState(null); 

    const [editingTodo, setEditingTodo] = useState(null);

    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [todoToShare, setTodoToShare] = useState(null);
    
    const confirmRemoval = (id) => {
        setTodoToDeleteId(id);
        setIsDeleteModalOpen(true); 
    };

    const cancelRemoval = () => {
        setIsDeleteModalOpen(false); 
        setTodoToDeleteId(null); 
    };
    
    const startEdit = (todo) => {
        setEditingTodo(todo); 
    };

    const finishEdit = () => {
        setEditingTodo(null);
    };

    const startShare = (todo) => {
        setTodoToShare(todo); 
        setIsShareModalOpen(true); 
    };

    const cancelShare = () => {
        setIsShareModalOpen(false); 
        setTodoToShare(null); 
    };
    
    return {
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
    };
}