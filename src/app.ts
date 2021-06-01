import morgan from 'morgan';
import express from 'express';
import cors from 'cors';


const application = express();

application.use(express.json());
application.use(morgan('dev'));
application.use(cors());

application.set('port', process.env.PORT || 8080);
//falta endpoint

export default application;