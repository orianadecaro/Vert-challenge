import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export const GET_USER = 'GET_USER';
export const USER_INFO = 'USER_INFO';

export  const initData = {
    array: []  
}

export const userDetailAction = (url = baseURL) => async (dispatch) => {

    if(localStorage.getItem(url)){
        dispatch({
            type:USER_INFO,
            payload: JSON.parse(localStorage.getItem(url))
          
        })

        return
    }

    try {

       const res = await axios.get(url, {
        headers: {
        Authorization: 'Bearer ' + token 
        }
     })
       dispatch({
           type: USER_INFO,
           payload: {
               user: res.data.id,
               activity: res.data.activity,
               name: res.data.activity.name,
               date: res.data.activity.date,
               distance: res.data.activity.distance,
               elevation_gain: res.data.activity.elevation_gain
           }, 
        
       })
       localStorage.setItem(url, JSON.stringify({
            user: res.data.id,
            activity: res.data.activity,
            name: res.data.activity.name,
            date: res.data.activity.date,
            distance: res.data.activity.distance,
            elevation_gain: res.data.activity.elevation_gain
        }))
    } catch (error) {
        console.log(error)
    }
}

export const getUserAction = (url = baseURL) => async (dispatch) => {

    if(localStorage.getItem('offset=0')){
        console.log('datos guardados')
        dispatch({
            type: GET_USER,
            payload: JSON.parse(localStorage.getItem('offset=0')),
        })
        return
    }
    try {
        const res = await axios.get(url, {
            headers: {
            Authorization: 'Bearer ' + token 
            }
         })
        console.log(res.data);
        dispatch({
            type: GET_USER,
            payload: res.data,
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data));
    } catch (error) {
        console.log(error)
    }
}