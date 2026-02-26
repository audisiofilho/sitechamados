import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { auth } from '../../services/firebaseConnection';
import { Link } from 'react-router-dom';

import './dashboard.css';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from 'react-icons/fi';

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <Header />
      
      <div className="content">
        <Title name="Tickets">
          <FiMessageSquare size={25} />
        </Title>
       <>
        <Link to="/new" className="new">
          <FiPlus size={25} color="#FFF" />
          Novo Chamado
        </Link>

        <table>
          <thead>
            <tr>
              <th scope="col">Cliente</th>
              <th scope="col">Assunto</th>
              <th scope="col">Status</th>
              <th scope="col">Cadastrado em</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Cliente">Cliente 1</td>
              <td data-label="Assunto">Assunto 1</td>
              <td data-label="Status">Aberto</td>
              <td data-label="Cadastrado em">01/01/2023</td>
              <td data-label="Ações">
                <button className="action" style={{backgroundColor:'#3583f6'}}>
                  <FiSearch size={17} color="#FFF" />
                </button>
                <button className="action">
                  <FiEdit2 size={17} color="#FFF" style={{backgroundColor:'#f6a935'}}/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
       </>
        
      </div>
    </div>
  );
}