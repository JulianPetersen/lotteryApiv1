import {config} from 'dotenv'
config();


export default{
    //Desarrollo
    //mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/lotteryapi',
    //Despliegue
    mongodbURL: process.env.MONGODB_URI || 'mongodb+srv://jdpeters:26092348@cluster0.jaeuy.mongodb.net/lotteryapp?retryWrites=true&w=majority',
    port: process.env.APP_PORT || '3000',
    host: process.env.APP_HOST || 'http://localhost'
}

