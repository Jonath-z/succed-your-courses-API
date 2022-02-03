import get_JWT_Token from "../middleware/jwt/getToken";
import { Router } from "express";

export class Get_JWT_Token {
    public path = '/getToken';
    public router = Router();

    constructor() {
        this.initializeRoute();
    }

    private initializeRoute() {
        this.router
            .route(this.path)
            .post(get_JWT_Token);
    }
}

export default Get_JWT_Token;