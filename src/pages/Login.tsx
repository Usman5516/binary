import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Css/Login.css'; // Import the plain CSS file

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (

    <div className="login-container">
      <div className="login-text-section">
        <div className="login-header">
          <div className="login-icon">
            <img src='./Group1.png' className="icon" />
          </div>
          <span className="login-subtitle">I.A COM A BINARYXZ</span>
        </div>
        <img className='Ellipse360-image' src="./Ellipse360.png"/>
        <h1 className="login-title">
          Você e sua marca
          <br />
          dominando
          <br />
          e fazendo parte
          <br />
          da <span className="highlight">Era Digital</span>
        </h1>

        <p className="login-description">
          A junção perfeita entre a utilização de Inteligência Artificial com a
          criatividade paixão humana.
        </p>
         <img className='Rebot-image' src="./rebot.png"/>
         <img className='Mask-image' src="./Mask.png"/>

      </div>

      <div className="login-form-section">
        <div className="form-container">
          <h2 className="form-title">ACESSAR SISTEMA</h2>

          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="CNPJ/CPF ou E-mail"
              className="form-input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              type="password"
              placeholder="Insira sua senha"
              className="form-input"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({ ...formData, remember: e.target.checked })
                  }
                  className="checkbox"
                />
                Lembrar-me
              </label>

              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="forgot-password"
              >
                Esqueci a senha
              </button>
            </div>

            <button type="submit" className="form-submit">
              Acessar
            </button>

            <p className="form-footer">
              Não tem uma conta?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="register-link"
              >
                Cadastre-se!
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
