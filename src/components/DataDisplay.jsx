import React from 'react';
import products from '../data.js';
import './Datadisplay.css'; 

const DataDisplay = () => {
  return (
    <div className='card-grid'>
      {products.map(item => (
        <div>
        <div key={item.id}>
          <div className="card" style={{ width: '18rem' }}>
            <img src={item.thumbnail} alt={`Thumbnail for ${item.title}`} />
            <div className="card-body">
              <h5>ID: {item.id}</h5>
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </div>
        </div> 
         ))}
    
    </div>
    
  );
};

export default DataDisplay;
