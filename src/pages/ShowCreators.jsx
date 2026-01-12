import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/Creator'; 

const ShowCreators = () => {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const getCreators = async () => {
            // orders by newest 
            const { data, error } = await supabase
                .from('creators')
                .select()
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching creators:', error);
            } else {
                setCreators(data);
            }
        };

        getCreators();
    }, []);

    return (
        <div className="container">
            <header style={{ textAlign: 'center', marginBottom: '40px' }}/>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '2rem' 
            }}>
                {creators && creators.length > 0 ? (
                    creators.map((creator) => (
                        <CreatorCard 
                            key={creator.id}
                            id={creator.id}
                            name={creator.name}
                            url={creator.url}
                            description={creator.description}
                            imageURL={creator.imageURL}
                        />
                    ))
                ) : (
                    <article style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                        <h2>No Creators Found 🕵️‍♂️</h2>
                        <p>Your Creatorverse is currently empty. Click "Add Creator" to get started!</p>
                    </article>
                )}
            </div>
        </div>
    );
};

export default ShowCreators;