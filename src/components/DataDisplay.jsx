import React, { useState, useEffect } from 'react';
import './Datadisplay.css';
import axiosInstance from './services/axiosInstance'; 


const DataDisplay = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axiosInstance.get('/products') 
      .then(data => {
        console.log('API response:', data);
        setCardsData(data.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className="card-grid">
      {cardsData.map(item => (
        <div key={item.id} className="card">
          <img src={item.thumbnail} alt={`Thumbnail for ${item.title}`} />
          <div className="card-body">
            <h5>ID: {item.id}</h5>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;

