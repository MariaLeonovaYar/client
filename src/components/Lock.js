
import React, {Component} from 'react';
import '../style/auth.css';
import '../style/index.css';
import {sendLockData} from "../api/SendLockData";
import {getUserData} from "../api/UserData";

var user;

class Lock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: this.reloadUserData()
          };
    }

    reloadUserData = () => {
        console.log("Запрос на получение данных..");
        getUserData(String(localStorage.getItem('username'))).then((data) => {
            this.setState({'data': data});
        });
    };

    clickHandler() {
      
            const username = localStorage.getItem('username');
            const person = document.getElementById("person").value;
            const design = document.getElementById("design").value;
            const size = document.getElementById("size").value;
            const message = document.getElementById("message").value;
            sendLockData(username, person, design, size, message);
        console.log(person, design, size, message);
    }

    render() {
        let cardContent;

        if (typeof(this.state.data) != "undefined"){
            cardContent = ( 
                <div className="card" style={{width: '24rem' }}>
                <div className="form-group"></div>
                    <div id="l-Text" class="l-Text">
                    <div class="design_lock">
                     <p>Пользователь: {String(localStorage.getItem('username'))}</p>
                      <p>У вас уже есть замочек.</p>
                      <p> Для добавления нового необходимо удалить старый.</p>
                </div>
            </div>
            </div>
            
            );
        }

        else{
            cardContent = (
            <div className="answer_container">
                <div class="l-Title">
                    <p>Выбери дизайн замочка</p>
                </div>
                <div>
                    
                <table>             
                    <tr>
                        <td>
                            <img className="image" src={require('../style/img/замок.png')}/>
                            <p>Красный</p>                         
                        </td>
                        <td>
                            <img className="image" src={require('../style/img/замок2.png')}/>
                            <p>Синий</p>                         
                        </td>
                        <td>
                            <img className="image" src={require('../style/img/замок3.png')}/>
                            <p>Жёлтый</p>                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        <select id = "design" class="form-control">
                            <option value="red">Красный</option>
                            <option value="blue">Синий</option>
                            <option selected value="yellow">Жёлтый </option>
                        </select>
                        </td>
                        <td> 
                        </td>
                    </tr>
                </table>
                </div>
                <div class="l-Title">
                    <p>Выбери размер замочка</p>
                </div>
                <div>
                    <table>
                    <tr>
                        <td>
                           <p> Маленький </p>
                        </td>
                        <td>
                            <p>Средний</p>                     
                        </td>
                        <td>
                            <p>Большой</p>               
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        <select id = "size" class="form-control">
                            <option value="little">Маленький</option>
                            <option value="middle">Средний</option>
                            <option selected value="big">Большой </option>
                        </select>
                        </td>
                        <td> 
                        </td>
                    </tr>
                    </table>
                </div>
                <div class="l-Title">
                    <p>Введи имя человека, вместе с которым вы хотите повесить замочек</p>
                </div>
                <p>
                    <div class="el_center">
                <input type="text" class="form-control" id="person"></input>
                </div>
                </p>
                <div class="l-Title">
                    <p>Оставь сообщение</p>
                </div>
                <p>
                <div class="el_center">
                <input type="text" class="form-control" id="message"></input>
                </div>
                </p>
                <div class="design_lock">
                <button class="button2" onClick={this.clickHandler}>Повесить на мост</button>
                </div>
            </div>
        
            );
        }

        return  (
         
         <div>
            {cardContent}
         </div>
      );  
        }
}
export default Lock;

 
