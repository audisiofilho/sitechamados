import { useState } from 'react';
import '../SignIn/signin.css';

import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
      e.preventDefault();

      if(name !== '' && email !== '' && password !== '') {
        alert('Usuário cadastrado com sucesso!');
        return;
      }
    }


  return (
    <div className='container-center'>
      <div className='login'>
        <div className='login-area'>
          <img src={logo} alt='Logo do sistema' />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar novo usuário</h1>
          <input 
          type='text' 
          placeholder='Nome completo' 
          value={name} 
          onChange={(e) => setName(e.target.value)}/>
          <input 
          type='text' 
          placeholder='email@email.com' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/>
          <input 
          type='password' 
          placeholder='********' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>

          <button type='submit'>Cadastrar</button>
        </form>

        <Link to='/'>Já possui uma conta?</Link>

      </div>
    </div>
  );
}