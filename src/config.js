import {config} from 'dotenv'
config();


export default{
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/lotteryapi',
    port: process.env.APP_PORT || '3000',
    host: process.env.APP_HOST || 'http://localhost'
}

