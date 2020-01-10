import axios from "axios";

export const getUserData = (username) => {
    return axios
        .get('https://server-lock.herokuapp.com/api/get_lock_data', {
            params: {username: username}
        })
        .then(res => { 
                let length = res.data.data.length;
                let userData = new Array(length);
                for (let i = 0; i < length; i++) {
                    userData[i] = new Array(5);
                    userData[i][0] = res.data.data[i]["size"];
                    userData[i][1] = res.data.data[i]["design"];
                    userData[i][2] = res.data.data[i]["person"];
                    userData[i][3] = res.data.data[i]["message"];
                    userData[i][4] = res.data.data[i]["_id"];
                }
                console.log(userData[0]);
                return userData[0];
            }
        ).catch((error) => {
            console.log(error);
        });
};
