import './LoginPage.css';
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [formdata, setFormData] = useState({
        email: '',
        senha: ''
})

const handleFormEdit = (event, name) => { 
    setFormData({
      ...formdata,
      [name]: event.target.value
    })
  }
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`localhost:5052/Usuarios/Autenticar/`, {
            method: 'POST',
            body: JSON.stringify(formdata)
          })
          const json  = await response.json()
          console.log(response.status)
          console.log(json)
};

    const handleRegister = (e) =>{
        e.preventDefault();
        navigate('/register')
};

    const handleForgotPassword = (e) =>{
        e.preventDefault();
        navigate('/forgot-password')
    }


  return (
<div className='background'>
    <div className='loginpage'>
        <div className='login-wrapper' onSubmit={handleSubmit}>
            <div className='login-input'>
                <h1>Login</h1>
                <div className='login-input-item'>
                    <label>Email</label>
                    <FaUser id='icon'/>
                    <input type='email' placeholder='User@exemple.com' value={formdata.email} onChange={(e) => {handleFormEdit(e, 'Email')}} required/>
                </div>
                <div className='login-input-item'>
                    <label>Senha</label>
                    <FaLock id='icon'/>
                    <input type="password" placeholder='Digite uma senha' value={formdata.senha} onChange={(e) => {handleFormEdit(e, 'Senha')}} required/>
                    <div className='esquecisenhaBtn'>
                    <label className='esquecisenha' onClick={handleForgotPassword}>Recuperar senha</label>
                    </div>
                </div>
                <div className='login-input-item'>
                    <button className='loginBtn' onClick={handleSubmit}>Entrar</button>
                    <label className='lblregister'>Não tem uma conta ?
                    <button className='registerBtn' onClick={handleRegister}>Cadastrar-se</button>
                    </label>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
