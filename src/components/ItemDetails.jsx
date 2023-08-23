import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axiosInstance from './services/axiosInstance';
import "./ItemDetails.css";
const ItemDetails = () => {
  const { id } = useParams(); 
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/products/${id}`)
      .then(data => {
        console.log('Item details:', data);
        setItemDetails(data); 
      })
      .catch(error => console.error('Error fetching item details:', error));
  }, [id]);

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-details">
      <h2>{itemDetails.title}</h2>
      
      <img src={itemDetails.thumbnail}/>
      <p>{itemDetails.description}</p>
      <button className="btn btn-primary">Add to Cart</button>
      <button className="btn btn-secondary">Add to Wishlist</button>
    
    </div>
  );
};

export default ItemDetails;
