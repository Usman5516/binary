import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Register.css'; 

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email1: '',
    password1: '',
    email2: '',
    password2: '',
    email3: '',
    password3: '',
    email4: '',
    password4: '',
    email5: '',
    password5: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">CADASTRO</h2>

        <form onSubmit={handleSubmit} className="register-form">
          {[1, 2, 3, 4, 5].map((index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                placeholder="CNPJ/CPF ou E-mail"
                className="register-input"
                value={formData[`email${index}` as keyof typeof formData]}
                onChange={(e) =>
                  setFormData({ ...formData, [`email${index}`]: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Insira sua senha"
                className="register-input"
                value={formData[`password${index}` as keyof typeof formData]}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [`password${index}`]: e.target.value,
                  })
                }
              />
            </React.Fragment>
          ))}

          <div className="register-actions">
            <button type="submit" className="register-button">
              Cadastrar
            </button>

            <p className="register-footer">
              Já tem uma conta?{' '}
              <button
                type="button"
                onClick={() => navigate('/')}
                className="register-link"
              >
                Acesse aqui!
              </button>
            </p>
          </div>
        </form>
      </div>
      <img className='Mask-left' src="./Maskleft.png"/>
      <img className='Ellipse360-image' src="./Ellipse360.png"/>
      
    </div>
  );
}
