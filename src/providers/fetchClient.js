import axios from 'axios'

export const __API__ = process.env.API_URL

const defaultOptions = {
  baseURL: __API__
}

const instance = axios.create(defaultOptions)

export default instance
