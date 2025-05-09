import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CadastroAcesso from './pages/CadastroAcesso';
import ListaAcessos from './pages/ListaAcessos';

const PaginaInicial = () => {
  return (
    <>
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="title">
              <span className="highlight-text">Controle de Acesso</span>
              <span className="subtitle-accent">Nova Geração</span>
            </h1>
            <p className="subtitle">Transforme a segurança da sua empresa com nossa solução inteligente de controle de acesso</p>
            <div className="cta-buttons">
            <Link to="/cadastro-acesso" className="primary-btn">
              <span>Cadastrar Acesso</span>
                <span className="btn-shine"></span>
            </Link>
            <Link to="/lista-acessos" className="secondary-btn">Ver Acessos</Link>
            </div>
          </div>
        </div>
        
        <div className="features-section">
          <h2 className="section-title">Recursos Avançados</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Segurança Inteligente</h3>
              <p>Controle biométrico avançado e autenticação em múltiplos fatores</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics em Tempo Real</h3>
              <p>Monitore e analise dados de acesso com dashboards intuitivos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Automação Inteligente</h3>
              <p>Regras personalizadas e integração com sistemas existentes</p>
            </div>
          </div>
        </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <div className="background-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <nav className="navbar">
          <div className="nav-content">
            <div className="nav-left">
              <Link to="/">
                <img src={logo} className="nav-logo" alt="logo" />
                <span className="company-name">Sistema de Controle de Acesso</span>
              </Link>
            </div>
            <div className="nav-right">
              <Link to="/cadastro-acesso" className="nav-link">Cadastro</Link>
              <Link to="/lista-acessos" className="nav-link">Lista de Acessos</Link>
              <a href="#" className="nav-link highlight">Login</a>
            </div>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/cadastro-acesso" element={<CadastroAcesso />} />
            <Route path="/lista-acessos" element={<ListaAcessos />} />
          </Routes>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <p className="copyright">© {new Date().getFullYear()} Sistema de Controle de Acesso</p>
            <p className="footer-tagline">Tecnologia do futuro para a segurança de hoje</p>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
