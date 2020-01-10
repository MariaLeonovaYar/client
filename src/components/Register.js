import React, {Component} from 'react';
import '../style/auth.css';
import {sendInputValue} from "../api/InputValues";


class Register extends Component {
    clickHandler() {
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
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
