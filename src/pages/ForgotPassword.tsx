import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/ForgotPassword.css'; // Import the plain CSS file


export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recovery email:', email);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="forgot-password-title">RECUPERAR SENHA</h2>

        <p className="forgot-password-description">
          Insira seu e-mail abaixo para receber o link de troca de senha.
          <br />
          Guarde bem sua senha para evitar problemas.
        </p>

        <form onSubmit={handleSubmit} className="forgot-password-form">
          <input
            type="email"
            placeholder="Insira seu e-mail"
            className="forgot-password-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="forgot-password-button">
            Solicitar recuperação
          </button>

          <p className="forgot-password-footer">
            Lembrou sua senha?{' '}
            <button
              type="button"
              onClick={() => navigate('/')}
              className="forgot-password-link"
            >
              Acesse aqui!
            </button>
          </p>  
        </form>
      </div>
      <img className='Mask-left' src="./Maskleft.png"/>
      <img className='Ellipse360-image' src="./Ellipse360.png"/>
    </div>
  );
}
