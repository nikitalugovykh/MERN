import React, { useEffect, useState } from 'react';
import { useMessage } from './hooks/message.hook';
import'./AuthPage.css';
import { useHttp } from './hooks/http.hook';

export const AuthPage = () => {
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        email: '', 
        password: ''
    })

    useEffect(()=> {
        message(error);
        clearError()
    },[error, message, clearError])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message)
        } catch (e) {

        }

    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            message(data)
        } catch (e) {

        }

    }

    return (
    <div className="row">
        <div className="col s6 offset-s3">
            <h1>Сократи ссылку</h1>
            <div className="card blue darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Авторизация</span>
                </div>
                
                <div className="input-field">
                    <input 
                        placeholder="Введите email" 
                        id="email" 
                        type="text" 
                        name="email"
                        className="validate yellow-input"
                        onChange = {changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="input-field ">
                    <input 
                        placeholder="Введите логин" 
                        id="password" 
                        type="password" 
                        name="password"
                        className="validate yellow-input"
                        onChange = {changeHandler}
                    />
                    <label htmlFor="email">Пароль</label>
                </div>
                
                <div className="card-action">
                    <button 
                        className="btn yellow darken-4 btn_logIn"
                        disabled = {loading}
                        onClick = { loginHandler }
                    >
                        Войти
                    </button>
                    <button 
                        className="btn grey darken-1"
                        onClick = { registerHandler }
                        disabled = {loading}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}