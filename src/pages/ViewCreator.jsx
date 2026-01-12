import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
    const { id } = useParams(); // Gets the ID from the URL
    const [creator, setCreator] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id) // Matches the ID in the database
                .single();

            if (error) console.error(error);
            else setCreator(data);
        };
        getCreator();
    }, [id]);

    if (!creator) return <p>Loading...</p>;

    return (
        <article className="container">
            {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
            <h1>{creator.name}</h1>
            <p>{creator.description}</p>
            <a href={creator.url} target="_blank" role="button">Visit Page</a>
            <div className="grid" style={{marginTop: '20px'}}>
                <Link to={`/edit/${id}`} role="button" className="secondary">Edit</Link>
                <button onClick={() => navigate('/')} className="outline">Back to Home</button>
            </div>
        </article>
    );
};

export default ViewCreator;