import React, {Component} from 'react';
import '../style/auth.css';
import {sendInputValue} from "../api/InputValues";


class Register extends Component {
    clickHandler() {
        const name = String(document.getElementById("name").value).replace(/\s+/g, '');
        const surname = String(document.getElementById("surname").value).replace(/\s+/g, '');
        const username = String(document.getElementById("username").value).replace(/\s+/g, '');
        const password = String(document.getElementById("password").value).replace(/\s+/g, '');
        sendInputValue(name, surname, username, password);
    }

    render() {
        return (
            <div class="container">
                <div class="row">                
                    <div class="card">
                        <div class="card-body">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Имя</label>
                                    <input type="text" id="name" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Фамилия</label>
                                    <input type="text" id="surname" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Логин</label>
                                    <input type="text" id="username" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Пароль</label>
                                    <input type="password" id="password" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default" onClick={this.clickHandler}>Зарегистрироваться</button>
                                </div>
                        </div> 
                    </div>  
                </div> 
            </div>
        );
    }   
}
export default Register;
