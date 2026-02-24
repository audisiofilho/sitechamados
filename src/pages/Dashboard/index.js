import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { auth } from '../../services/firebaseConnection';

import Header from '../../components/Header';

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Sair da conta.</button>
    </div>
  );
}