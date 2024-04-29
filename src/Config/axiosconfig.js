import axios from "axios";
import getEnvVariable from "../Getenv";

// console.log(process.env.REACT_APP_NODE_ENV)
// console.log(getEnvVariable("BASE_URL"))
// console.log(getEnvVariable("NODE_ENV"))
const instance = axios.create({
    baseURL:  'http://localhost:3000/api', 
})

export default instance;