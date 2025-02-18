import { Link, useLocation } from 'react-router-dom';
import '../pages/Css/Header.css'; 


export default function Header() {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Login' },
    { to: '/forgot-password', label: 'Recuperar Senha' },
    { to: '/register', label: 'Cadastro' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <img src='./logo_binary.png' className="bot-icon" />
          </div>

          <nav className="header-nav">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${
                  location.pathname === link.to ? 'active-link' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
