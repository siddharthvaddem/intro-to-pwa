import axios from 'axios'
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY='53fad7718e46a81d6f7d869dcc014b8b';
export const fetchWeather =async(query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    })
    return data;
}

