import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
  }

  function handleSubmit() {
    const fullName = `${name} ${surname}`.toLowerCase();
    if (fullName === "admin admin") {
      setMessage("Hoşgeldin Admin!");
      setTimeout(() => {
        navigate('/admin');
      }, 1000);
    } else if (name && surname) {
      setMessage("Kullanıcı girişi başarılı!");
      setTimeout(() => {
        navigate('/user');
      }, 1000);
    } else {
      setMessage("Lütfen ad ve soyad giriniz.");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Giriş Kontrolü</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Adınızı girin"
            value={name}
            onChange={handleNameChange}
            style={{ padding: '10px', fontSize: '16px', width: '200px' }}
          />
          <input
            type="text"
            placeholder="Soyadınızı girin"
            value={surname}
            onChange={handleSurnameChange}
            style={{ padding: '10px', fontSize: '16px', width: '200px' }}
          />
          <button 
            onClick={handleSubmit}
            style={{ 
              padding: '10px 20px', 
              fontSize: '16px', 
              backgroundColor: '#61dafb', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Giriş Yap
          </button>
          <h3 style={{ 
            marginTop: '20px', 
            color: message.includes('başarılı') || message.includes('Hoşgeldin') ? '#4CAF50' : '#f44336' 
          }}>
            {message}
          </h3>
        </div>
      </header>
    </div>
  );
}

export default App;
