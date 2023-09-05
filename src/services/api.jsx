import axios from 'axios'

const API_key = '0f564d235e1827cc135b7bfee7ca6046';
const API_url = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try{
        let response = await axios.get(`${API_url}?q=${city},${country}&appid=${API_key}&units=matric`);
        return response.data;
    }catch (error){
        console.log('Error call when Api call', error.message)
        return error.response;
    }
}

