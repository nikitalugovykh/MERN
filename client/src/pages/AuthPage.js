import React, { useState } from 'react';
import'./AuthPage.css';

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '', 
        password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
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
                        class="validate"
                        name="email"
                        className="yellow-input"
                        onchange = {changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                </div>

                <div className="input-field ">
                    <input 
                        placeholder="Введите логин" 
                        id="password" 
                        type="password" 
                        class="validate"
                        name="password"
                        className="yellow-input"
                        onchange = {changeHandler}
                    />
                    <label htmlFor="email">Пароль</label>
                </div>
                
                <div className="card-action">
                    <button className="btn yellow darken-4 btn_logIn">Войти</button>
                    <button className="btn grey darken-1">Регистрация</button>
                </div>
            </div>
        </div>
    </div>
    )
}