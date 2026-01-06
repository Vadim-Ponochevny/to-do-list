import React, { useState } from 'react';

export default function EditDialog({ 
    todo, 
    onSave, 
    onCancel 
}) {

    const [title, setTitle] = useState(todo.title);
    const [about, setAbout] = useState(todo.about);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === '' || about.trim() === '') {
            alert('Поля не должны быть пустыми!');
            return;
        }

        onSave(todo.id, title.trim(), about.trim());
    };

    return (
        <div className="edit__overlay">
            <section className="edit__window">
                <h3>Редактировать задачу</h3>
                    <input 
                        type="text" 
                        className="edit__input title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Заголовок"
                    />
                    <textarea 
                        className="edit__input about"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Описание"
                    />
                    
                    <div className="edit__window__buttons">
                        <button 
                            type="submit" 
                            className="button__window__action"
                            onClick={handleSubmit}
                        >
                        Сохранить
                        </button>
                        <button 
                            type="button" 
                            className="button__window__action" 
                            onClick={onCancel} 
                        >
                            Отмена
                        </button>
                    </div>
            </section>
        </div>
    );
}