import React, {Component} from 'react';
import '../style/css/bootstrap.min.css';

class Navigation extends  Component  {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: (localStorage.getItem('isLoggedIn'))
      }
    }

    set() {
      this.setState({
        isLoggedIn: localStorage.getItem('isLoggedIn')
      });
    }

    componentDidMount() {
      if(String(localStorage.getItem('isLoggedIn'))== 'true')
        this.set()
    }

    clickHandler(){
      localStorage.setItem('isLoggedIn', '');   
      localStorage.setItem('username', '');
    }

  render() {
        if (String(this.state.isLoggedIn) == 'true')
        {
          return(
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Домашняя страница</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/LockList">Мои замочки</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Lock">Повесить замочек</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/" onClick={this.clickHandler}>Выход</a>
                  </li>
                </ul>
              </nav>
            </div>
          );
        }
          else return (
            <div>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link" href="/Auth">Авторизация</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/Register">Регистрация</a>
                  </li>
                </ul>
              </nav>
            </div>
          );
  }
}

export default Navigation;



