import axios from "axios";

export const sendInputValue = (name, surname, username, password) => {
    
    const payload = {
        name: name,
        surname: surname,
        username: username,
        password: password
    };
    return axios
        .post('https://server-lock.herokuapp.com/register', payload)
        .then(res => { 
            let userData = String(res.data['message']);
            if(name != '' && surname != ''&& username != '' && password != ''){
            if (userData === 'true'){
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                window.location.replace("/");
                return userData;
            }
   
            else {
                alert( "Введенное Вами имя уже используется!" );
                return userData;
            }
        }
        else {
            alert( "Заполните, пожалуйста, все поля!" );
            return userData;
        }
        })
        .catch((error) => {
            alert('Ошибка регистрации.')
        });
        
};
