import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = String(process.env.THEMOVIEDB_API_KEY)

const client = (endpoint: string, config?: AxiosRequestConfig) => {
  return axios({
    ...config,
    ...{
      url: `${BASE_URL}/${endpoint}?&api_key=${API_KEY}`,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  })
}

export default client
