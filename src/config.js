import {config} from 'dotenv'
config();


export default{
    mongodbURL: process.env.MONGODB_URI || 'mongodb+srv://jdpeters:26092348@cluster0.jaeuy.mongodb.net/test?retryWrites=true&w=majority',
    port: process.env.APP_PORT || '3000',
    host: process.env.APP_HOST || 'http://localhost'
}

