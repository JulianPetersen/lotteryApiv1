import {config} from 'dotenv'
config();


export default{
    //desarrollo:
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/lotteryapi',
    //produccion:
    //mongodbURL: process.env.APP_ROMOTE_HOST || 'mongodb://localhost/lotteryapi',
    port: process.env.APP_PORT || '3000',
    host: process.env.APP_HOST || 'http://localhost',

    
}

