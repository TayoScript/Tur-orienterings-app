import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DeleteUser.css';
import API_BASE_URL from '../config';

const DeleteUser = () => {
  const navigate = useNavigate();

  /**
   * Handles the account deletion process.
   * Sends a DELETE request to the server to remove the user's profile.
   * On success, clears all local storage, logs a message, and redirects to the goodbye page.
   * Catches and logs any errors that occur during the process.
   */
  
  const handleDeleteAccount = async () => {
    try {
<<<<<<< Updated upstream
      const token = localStorage.getItem('token');
=======
      const token = localStorage.getItem("token");
>>>>>>> Stashed changes
      const response = await fetch(`${API_BASE_URL}/api/v1/users/deleteMyProfile`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log('Account deleted successfully');
        localStorage.clear(); // Clear all local storage data
        navigate('/goodbye'); // Redirect to a goodbye or login page after account deletion
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className="delete-user-container">
      <h1>Delete Account</h1>
      <p>Are you sure you want to delete your account?</p>
      <p>This action cannot be undone.</p>
      <div className="delete-buttons">
        <button className="delete-account-btn" onClick={handleDeleteAccount}>Delete Account</button>
        <button className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteUser;
