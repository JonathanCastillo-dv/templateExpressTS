import express from 'express';
import cors from 'cors';
import user from '../routes/user';
import { dbConnection } from '../database/config';
class Server{
    private app = express();
    private port = process.env.PORT;
    private userRouterPath = '/api/users';
    constructor(){
//Conexión a la base de datos
    this.conectarDB();
//Middlewares
    this.middlewares();
//Rutas de  mi app
    this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.userRouterPath,user);
    }
    listem(){
        this.app.listen(this.port, () => console.log(`Server running on http://localhost:${this.port}`.bgGreen))
    }
}

export default  Server;