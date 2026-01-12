import React from 'react'
import { Link } from 'react-router-dom'

const Creator = (props) => {
  return (
    <article className="creator-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {props.imageURL && (
        <img 
          src={props.imageURL} 
          alt={props.name} 
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
        />
      )}
      <div style={{ flex: '1' }}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      
      <footer style={{ marginTop: 'auto' }}>
        <div style={{ marginBottom: '10px' }}>
            <a href={props.url} target="_blank" rel="noreferrer" role="button" className="secondary" style={{ width: '100%' }}>
            Visit Channel
            </a>
        </div>
        <div className="grid">
          <Link to={'/view/' + props.id} role="button">Details</Link>
          <Link to={'/edit/' + props.id} role="button" className="outline">Edit</Link>
        </div>
      </footer>
    </article>
  )
}

export default Creator