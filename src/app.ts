import 'colors';
import 'dotenv/config'
import SERVER from './models/server';

const server = new SERVER();

server.listem();
