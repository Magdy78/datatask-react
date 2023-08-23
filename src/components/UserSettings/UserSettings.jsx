import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';
import './UserSettings.css';

const UserSettings = () => {
  const { userId } = useParams(); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/users/1`)
      .then(data => {
        console.log('User data:', data);
        setUserData(data); 
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-settings">
      <h2>User Settings</h2>
      <div className="user-details">
        <p><strong>Name:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Username:</strong> {userData.username}</p>
      
      </div>
    </div>
  );
};

export default UserSettings;
