import React, { useState } from "react";
import Button from "./Button";
import {v4 as uuidv4} from 'uuid';

// CSS
import '../sass/Login.scss';


function Login (props){

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');


    // Maneja el eventa al darle al boton de Login
    const mLogin= (e) =>{
        e.preventDefault();

        
    };

    // Maneja el evento al darle al boton de register
    const mRegister= (e) =>{
        e.preventDefault();

        const newUser = {
            id:uuidv4(),
            user:user,
            password:password

        }
        
        props.onSubmit(newUser);
    };

    // Lee los inputs para generar los usuarios
    // Lee el input EMAIL
    const mChangeUser = e =>{
        setUser(e.target.value)
        console.log(user)
    }
    // Lee el input PASSWORD
    const mChangePassword = e =>{
        setPassword(e.target.value)
        console.log(password)
    }
    
    // Dependiendo del TYPE puede mostrar el input de login o nos mostrara el register para generar mas usuarios
    if(props.type === 'login'){
        return (
            <div className="container-login">
                <form >
                    <div className="container-login-input">
                        <div className="login-input">
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" id="login-email" placeholder="email" onChange={mChangeUser}/>
                        </div>
    
                        <div className="login-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="login-password"  placeholder="password" onChange={mChangePassword}/>
                        </div>
                    </div>
                    
                    <Button text='Login' type='login' mClick={mLogin}/>
                    <hr />
                    <Button text='Register' type='register' mClick={mRegister}/>
                </form>
            </div>
        )
    }

    if(props.type === 'register'){
        return (
            <div className="container-login">
                <form onSubmit={mRegister}>
                    <div className="container-login-input">
                        
                        <div className="login-input">
                            <label htmlFor='email'>Email</label>
                            <input type="text" name="email" id="login-email" placeholder="email"
                            onChange={mChangeUser}/>
                        </div>
    
                        <div className="login-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="login-password"  placeholder="password"
                            onChange={mChangePassword}/>
                        </div>

                        <div className="login-input">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="password" id="login-password-confirm"  placeholder="password"
                            onChange={mChangePassword}/>
                        </div>
                    </div>
                    
                    <Button text='Register' type='register'/>
                </form>
            </div>
        )
    }
    
}

export default Login;
