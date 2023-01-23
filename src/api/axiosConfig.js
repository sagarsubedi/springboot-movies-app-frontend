import axios from "axios";

export default axios.create({
  baseURL: "https://springbootmoviebackend.sagarsubedi.com",
  // baseURL: "http://localhost:8080",
  headers: {
    // 'Access-Control-Allow-Origin': 'https://springbootmoviefrontend.sagarsubedi.com/',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  }
  
});