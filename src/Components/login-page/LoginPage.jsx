import './LoginPage.css';
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate('/home')
};


  return (
<div className='background'>
    <div className='loginpage'>
        <div className='login-wrapper' onSubmit={handleSubmit}>
            <div className='login-input'>
                <h1>Login</h1>
                <div className='login-input-item'>
                    <label>Email</label>
                    <FaUser id='icon'/>
                    <input type='text' placeholder='User@exemple.com' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className='login-input-item'>
                    <label>Senha</label>
                    <FaLock id='icon'/>
                    <input type="password" placeholder='Digite uma senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className='esquecisenhaBtn'>
                    <label className='esquecisenha'>Recuperar senha</label>
                    </div>
                </div>
                <div className='login-input-item-check'>
                </div>
                <div className='login-input-item'>
                    <button type='button' className='loginBtn' onClick={handleSubmit}>Entrar</button>
                    <label className='lblregister'>Não tem uma conta ?
                    <button className='registerBtn'>Cadastrar-se</button>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
