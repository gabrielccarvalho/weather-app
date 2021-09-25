import axios from 'axios'
import { API_KEY } from '@env'

// Returns the current weather for a specific city
export async function weatherRequest (city: string) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(res => res.data)
    .catch(error => console.error(error))
}

// Returns a 5 day forecast for a specific city
export async function forecastRequest (city: string) {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
    .then(res => res.data)
    .catch(error => console.error(error))
}
