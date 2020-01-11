import axios from "axios";

export const sendUsernamePassword = (username, password) => {
    const payload = {
        username: username,
        password: password
    };
    return axios
        .post('https://server-lock.herokuapp.com/login', payload)
        .then(res => {
            let userData = res.data['message'];
            if(username != '' && password != ''){
            if (userData === 'true'){
                window.location.replace("/")
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
            }
            else {
                alert( "Неверный логин или пароль!" );
                localStorage.setItem('isLoggedIn', '');
                localStorage.setItem('username', '');
            }
        }
        else {
            alert( "Заполните, пожалуйста, поля логин и пароль!" );
            return userData;
        }
        })
        .catch((error) => {
            alert('Ошибка авторизации.')
        });
};
