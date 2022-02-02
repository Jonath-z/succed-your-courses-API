import { homeHandler } from "../middleware/asyncHandler/home";
import { Router } from "express";


export class HomeRoute {
    public path = '/home';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router
            .route(this.path)
            .get(homeHandler);
    }
}