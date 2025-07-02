const API_KEY=import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const loadWeatherData = async (query)=>{
    const response = await fetch(`${BASE_URL}weather?q=${encodeURIComponent(query)},${encodeURIComponent(query)}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log(data);
    return data;    
}
