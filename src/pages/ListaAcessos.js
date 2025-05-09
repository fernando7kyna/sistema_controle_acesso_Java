import React, { useState, useEffect } from 'react';
import './ListaAcessos.css';

const ListaAcessos = () => {
  const [acessos, setAcessos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatarData = (data) => {
    if (!data) return '';
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  };

  const formatarHora = (hora) => {
    if (!hora) return '';
    return hora.substring(0, 5); // Retorna apenas HH:mm
  };

  useEffect(() => {
    const buscarAcessos = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/acessos');
        if (!response.ok) {
          throw new Error('Erro ao buscar acessos');
        }
        const data = await response.json();
        console.log('Acessos recebidos:', data);
        setAcessos(data);
      } catch (error) {
        console.error('Erro:', error);
        setError('Erro ao carregar os acessos');
      } finally {
        setLoading(false);
      }
    };

    buscarAcessos();
  }, []);

  if (loading) {
    return <div className="loading">Carregando acessos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="lista-acessos-container">
      <h1>Acessos Cadastrados</h1>
      <div className="table-container">
        <table className="acessos-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Documento</th>
              <th>Telefone</th>
              <th>E-mail</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {acessos.length === 0 ? (
              <tr>
                <td colSpan="7" className="no-data">
                  Nenhum acesso cadastrado
                </td>
              </tr>
            ) : (
              acessos.map((acesso) => (
                <tr key={acesso.id}>
                  <td>{acesso.nomeCompleto}</td>
                  <td>{acesso.documento}</td>
                  <td>{acesso.telefone}</td>
                  <td>{acesso.email}</td>
                  <td>{acesso.tipoAcesso}</td>
                  <td>{formatarData(acesso.dataAcesso)}</td>
                  <td>{formatarHora(acesso.horaAcesso)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListaAcessos; 