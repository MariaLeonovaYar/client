import axios from "axios";

export const delete_lock_id= (id_lock) => {
    const payload = {
       id_lock: id_lock
    };
    return axios
        .post('https://server-lock.herokuapp.com/api/delete_lock_id', payload)
        .then(res => {
            console.log('Данные успешно были удалены',  res.data.data);
            return res.data.data;
        })
        .catch((error) => {
            console.log('Данные не были успешно удалены');
            console.log(error);
        });
};
