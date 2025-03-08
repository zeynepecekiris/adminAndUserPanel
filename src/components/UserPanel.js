import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function UserPanel() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to User Panel</h1>
        <p>You have successfully logged in as a user.</p>
        <button 
          onClick={() => navigate('/')}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            backgroundColor: '#61dafb', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Ana Sayfaya Dön
        </button>
      </header>
    </div>
  );
}

export default UserPanel; 