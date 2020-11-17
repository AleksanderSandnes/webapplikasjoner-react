import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import {PORT} from './konstanter/index.js';
import 'dotenv/config.js';
import errorMiddleware from './feilhandtering/feilmeldinger.js';
import databaseTilkobling from './konfigurasjon/databasen.js';
import valg from './ruter/valg.js';
import bruker from './ruter/bruker.js';

const applikasjon = express();

if(process.env.NODE_ENV === 'development') {
    applikasjon.use(morgan('dev'));
}

applikasjon.use(express.json());

applikasjon.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type']
}));

applikasjon.use('${process.env.BASEURL}/valg', valg);
applikasjon.use('${process.env.BASEURL}/brukere', bruker);
applikasjon.use(errorMiddleware);

databaseTilkobling();

const server = applikasjon.listen (
    PORT,
    console.log('Server kjører i ${process.env.NODE_ENV} modus på port ${PORT}')
);

process.on('unhandledRejection', (err) => {
    console.log('Errors: ${err.message}');
    console.log('Shutting down server due to unhandled promise rejection');
    console.log('Feilen er i server.js');
    server.close(() => {
        process.exit(1);
    });
});