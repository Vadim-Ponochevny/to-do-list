import React, { useState, useRef } from 'react';
import AddIcon from '../assets/plus.svg';

export default function NewTaskForm({ addTask }) { 
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const aboutInputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        if (title.trim() && about.trim()) {
            addTask(title.trim(), about.trim());
            setTitle(''); 
            setAbout(''); 
        } else {
            alert('Пожалуйста, заполните оба поля!');
        }
    };

    const handleKeyDown = (event, field) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            if (field === 'title' && title.trim()) {
                aboutInputRef.current?.focus();
            } else if (field === 'about') {
                handleSubmit(event);
            }
        }
    };

    return (
        <section className="create__new__task__box">
            <div className="inputs__new__tasks">
                <input 
                    className="input__1"
                    type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Title..."
                    onKeyDown={(event) => handleKeyDown(event, 'title')}
                />
                <input
                    ref={aboutInputRef}
                    className="input__1"
                    type="text"
                    value={about}
                    onChange={(event) => setAbout(event.target.value)}
                    placeholder="About..."
                    onKeyDown={(event) => handleKeyDown(event, 'about')}
                />
            </div>
            <button 
                className="button__add"
                onClick={handleSubmit}
            >
                <img src={AddIcon} alt="Add task" />
            </button>
        </section>
    );
}