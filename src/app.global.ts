import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { routes } from './routes';

export class App{
    public app: express.Application;
    public port: number

    constructor() {
        this.app = express();
        this.initilizeMiddleware();
        this.initializeRoutes(routes);
    }

    private initilizeMiddleware(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
    }

    private initializeRoutes(routes: any[]): void {
        routes.forEach(route => {
            this.app.use('/api/v1', route.router);
        });
    }

    listen(): void{
        const port = process.env.PORT || 3000;
        this.app.listen(port, () => {
            console.log('server is running');
        })
    }
}