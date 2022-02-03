import JWT_Verify_Token from "../middleware/jwt/verifyToken";
import { Router } from "express";

export class JWT_Verify_Token_Route {
    public path = '/verifyToken';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router
            .route(this.path)
            .post(JWT_Verify_Token);
    }
}
