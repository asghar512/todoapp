import React, { useState } from 'react';
import './index.css';

export default function LinkForm({ refreshLinks }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const resetForm = () => {
        setName('');
        setDescription('');
        setUrl('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { name, url, description };
        try {
            const res = await fetch('/.netlify/functions/createLink', {
                method: 'POST',
                body: JSON.stringify(body),
            });
            resetForm();
            refreshLinks();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="card1">
            <div style={{fontWeight:'bold',textTransform:'uppercase'}} className="card-header addtodo">Add TODO</div>
            <div className="card-body1">
                <form onSubmit={handleSubmit}>
                    <div className="form-group1">
                        <label htmlFor="name" className="name mr" placeholder="name">Name</label>
                        <input id="m"
                            type="text"
                            name="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="url" className="name">Task</label>
                        <input id="mw"
                            type="text"
                            name="url"
                            className="form-control"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="name">Date</label>
                        <textarea id="mw"
                            name="description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn add">
                        ADD
                    </button>
                </form>
            </div>
        </div>
    );
}