import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    const createCreator = async (event) => {
        event.preventDefault();
        const { error } = await supabase
            .from('creators')
            .insert(creator); // Inserts the state object into the DB

        if (error) console.error(error);
        else navigate('/'); // Redirects to the homepage 
    };

    return (
        <form onSubmit={createCreator}>
            <label>Name <input type="text" name="name" onChange={handleChange} required /></label>
            <label>Social Media<input type="url" name="url" onChange={handleChange} required /></label>
            <label>Description <textarea name="description" onChange={handleChange} required /></label>
            <label>Image URL (Optional) <input type="text" name="imageURL" onChange={handleChange} /></label>
            <button type="submit">Submit Creator</button>
        </form>
    );
};

export default AddCreator;