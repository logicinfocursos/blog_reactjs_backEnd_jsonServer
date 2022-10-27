import axios from 'axios'
//import { __SETUP__ } from '../../config/constants/setUp'


export const api = axios.create({ baseURL: process.env.REACT_APP_API_BASEURL })
   