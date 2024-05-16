// This is for only for media uploading
require("dotenv").config();
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY || "AIzaSyCCPdDBvyiHE42L30RHe5D3NO7ROQKgpWo",
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN || "alumni-hub-bb1db.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_PROJECTID || "alumni-hub-bb1db",
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET || "alumni-hub-bb1db.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID || "193013291073",
    appId: process.env.NEXT_PUBLIC_APPID || "1:193013291073:web:b5c976bc3b04c4a6034ec0",
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID || "G-4T8S7PGLQ5"
  };
  
module.exports = firebaseConfig;