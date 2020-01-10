import React, {Component} from 'react';
import '../style/auth.css';
import {sendUsernamePassword} from "../api/Auth";
class Auth extends Component {
    
    clickHandler() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        sendUsernamePassword(String(username), String(password));
    }
     
    render() {
        return (
            <div class="container">
            <div class="row">                
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Логин</label>
                            <input type="text" class="form-control" id="username" required></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Пароль</label>
                            <input type="password" class="form-control" id="password" required></input>
                        </div>
                        <div class="form-group">
                            <div class="main-checkbox">
                                <input value="None" id="checkbox1" name="check" type="checkbox"></input>
                                <label for="checkbox1"></label>
                            </div>
                            <span class="text">Запомнить</span>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default" onClick={this.clickHandler}>Войти</button>
                        </div>
                    </div> 
                </div>  
            </div> 
        </div>
        );
    }   
}
export default Auth;
