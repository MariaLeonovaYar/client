import React, {Component} from 'react';
import {getUserData} from "../api/UserData";
import {delete_lock_id} from "../api/DeleteLock";


var ID;

class LockList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            data: [[]]

          };
    }

    reloadUserData = () => {
        console.log("Запрос на получение данных..");
        console.log(String(localStorage.getItem('username')));
        getUserData(String(localStorage.getItem('username'))).then((data) => {
            this.setState({'data': data});
        });

    };

    clickDeleteHandler = () => {
        console.log("Запрос на удаление данных замка под номером ", ID);   
        delete_lock_id(Number(ID)).then((data) => {
            this.setState({'data': data});
        });
    };

    render() {   
      let cardContent = ( 
          <div id="l-Text" class="l-Text">
              <div class="design_lock">
            <p>Пользователь: {String(localStorage.getItem('username'))}</p>
            <p>Проверить наличие замочка?</p>
            </div>
            <button type="submit" class="btn btn-danger" onClick={this.reloadUserData}>Проверить</button>

       </div>
       );
        if (typeof this.state.data == "undefined"){
             cardContent = (
                <div class="design_lock">
                <div id="l-Text" class="l-Text">
                    <p>У вас нет замочка.</p>
                    </div>
              </div>
            );
        }

        else {
           
            if (this.state.data[1] === "yellow")
            { ID = this.state.data[4]; 
                cardContent = (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                    <div id="l-Text" class="l-Text">    
                    <div class="design_lock">
                        <img className="image" src={require('../style/img/замок3.png')}/>
                        <p>Пользователь: {localStorage.getItem('username')}</p>
                        <p onClick={this.textClickHandler}>Человек: {this.state.data[2]}</p>
                        <p onClick={this.textClickHandler}>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[0]}</p>
                    </div>
                        <button type="submit" class="btn btn-danger" onClick={this.clickDeleteHandler}>Удалить замочек</button>   
                  </div>
                  </div>
                 </div> 
                  
                );
            }
            if (this.state.data[1] === "blue")
            { ID = this.state.data[4]; 
                cardContent = (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                    <div id="l-Text" class="l-Text">    
                    <div class="design_lock">
                        <img className="image" src={require('../style/img/замок2.png')}/>
                        <p>Пользователь: {localStorage.getItem('username')}</p>
                        <p onClick={this.textClickHandler}>Человек: {this.state.data[2]}</p>
                        <p onClick={this.textClickHandler}>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[0]}</p>
                    </div>
                        <button type="submit" class="btn btn-danger" onClick={this.clickDeleteHandler}>Удалить замочек</button>   
                  </div>
                  </div>
                 </div> 
                  
                );
            }
            if (this.state.data[1] === "red")
            {
                ID = this.state.data[4]; 
                cardContent = (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                    <div id="l-Text" class="l-Text">    
                    <div class="design_lock">
                        <img className="image" src={require('../style/img/замок.png')}/>
                        <p>Пользователь: {localStorage.getItem('username')}</p>
                        <p onClick={this.textClickHandler}>Человек: {this.state.data[2]}</p>
                        <p onClick={this.textClickHandler}>Сообщение: {this.state.data[3]}</p>
                        <p>Размер: {this.state.data[0]}</p>
                    </div>
                        <button type="submit" class="btn btn-danger" onClick={this.clickDeleteHandler}>Удалить замочек</button>   
                  </div>
                  </div>
                 </div> 
                  
                );
            }
        }
      
        
        return (
            <div className="card" style={{width: '24rem' }}>
                <div className="form-group">
                    {cardContent}
               </div>
            </div>
    );
    
}
}

export default LockList;
