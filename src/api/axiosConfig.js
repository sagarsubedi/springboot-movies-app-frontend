import axios from "axios";

export default axios.create({
  baseURL: "https://springbootmoviebackend.sagarsubedi.com",
  headers: {
    // 'Access-Control-Allow-Origin': 'https://springbootmoviefrontend.sagarsubedi.com/',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  }
  
});