import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    useEffect(() => {
        const getCreator = async () => {
            const { data } = await supabase.from('creators').select().eq('id', id).single();
            setCreator(data);
        };
        getCreator();
    }, [id]);

    const updateCreator = async (e) => {
        e.preventDefault();
        await supabase.from('creators').update(creator).eq('id', id);
        navigate('/');
    };

    const deleteCreator = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this creator?");
        if (confirmDelete) {
            await supabase.from('creators').delete().eq('id', id);
            navigate('/');
        }
    };

    return (
        <div>
            <form onSubmit={updateCreator}>
                <label>Name <input type="text" name="name" value={creator.name} onChange={(e) => setCreator({...creator, name: e.target.value})} /></label>
                <label>Social Media<input type="text" name="url" value={creator.url} onChange={(e) => setCreator({...creator, url: e.target.value})} /></label>
                <label>Description <textarea name="description" value={creator.description} onChange={(e) => setCreator({...creator, description: e.target.value})} /></label>
                <button type="submit">Update</button>
            </form>
            <button className="contrast" onClick={deleteCreator}>Delete Creator</button>
        </div>
    );
};

export default EditCreator;