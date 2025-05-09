import React, { useState } from 'react';
import './CadastroAcesso.css';

const CadastroAcesso = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    documento: '',
    telefone: '',
    email: '',
    tipoAcesso: 'visitante',
    dataAcesso: '',
    horaAcesso: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Cadastrando acesso...' });

    try {
      // Formatar data e hora antes de enviar
      const dadosFormatados = {
        ...formData,
        dataAcesso: formatDate(formData.dataAcesso)
      };

      console.log('Enviando dados:', dadosFormatados);

      const response = await fetch('http://localhost:8080/api/acessos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFormatados)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao cadastrar acesso');
      }

      const data = await response.json();
      console.log('Resposta do servidor:', data);

      setStatus({
        type: 'success',
        message: 'Acesso cadastrado com sucesso!'
      });

      // Limpar formulário
      setFormData({
        nomeCompleto: '',
        documento: '',
        telefone: '',
        email: '',
        tipoAcesso: 'visitante',
        dataAcesso: '',
        horaAcesso: ''
      });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 3000);

    } catch (error) {
      console.error('Erro:', error);
      setStatus({
        type: 'error',
        message: error.message || 'Erro ao cadastrar acesso. Tente novamente.'
      });
    }
  };

  return (
    <div className="cadastro-acesso-container">
      <h1>Cadastro de Acesso</h1>
      {status.message && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="cadastro-form">
        <div className="form-group">
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="documento">Documento (CPF/RG):</label>
          <input
            type="text"
            id="documento"
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipoAcesso">Tipo de Acesso:</label>
          <select
            id="tipoAcesso"
            name="tipoAcesso"
            value={formData.tipoAcesso}
            onChange={handleChange}
            required
          >
            <option value="visitante">Visitante</option>
            <option value="funcionario">Funcionário</option>
            <option value="prestador">Prestador de Serviço</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dataAcesso">Data do Acesso:</label>
          <input
            type="date"
            id="dataAcesso"
            name="dataAcesso"
            value={formData.dataAcesso}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="horaAcesso">Hora do Acesso:</label>
          <input
            type="time"
            id="horaAcesso"
            name="horaAcesso"
            value={formData.horaAcesso}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? 'Cadastrando...' : 'Cadastrar Acesso'}
        </button>
      </form>
    </div>
  );
};

export default CadastroAcesso; 