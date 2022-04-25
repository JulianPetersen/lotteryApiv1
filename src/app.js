import express from "express";
import AuthRoutes from './routes/auth.routes';
import PostRoutes from './routes/post.routes';
import CategoryRoutes from './routes/category.routes'
import instagramcomment from './routes/igcomment.routes'
import morgan from "morgan";
import cors from 'cors';

const app = express();
//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static files
app.use('/public', express.static(`${__dirname}/storage/imgs`))
console.log(`${__dirname}/storage/imgs`)



//routes
app.get('/', (req,res) => {
    res.json({message: 'Bienvenidos a sorteando Apiv2'});
})

app.use('/api/auth', AuthRoutes);
app.use('/api/post', PostRoutes);
app.use('/api/category', CategoryRoutes);
app.use('/api/instagramcomment', instagramcomment)



export default app;