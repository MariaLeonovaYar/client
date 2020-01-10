import axios from "axios";

export const sendLockData= (username, person, design, size, message) => {
    const payload = {
        username: username,
        person: person,
        design: design,
        size: size,
        message: message
    };
    return axios
        .post('https://server-lock.herokuapp.com/api/send_lock_data', payload)
        .then(res => {
            window.location.replace("/Success")
            return res.data;
        })
        .catch((error) => {
            alert('Ошибка отправки данных.')
        });
};