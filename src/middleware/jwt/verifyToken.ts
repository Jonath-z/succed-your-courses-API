import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';
import { jwt_secretKey } from "../../constants";


const JWT_Verify_Token = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token: string = req.body.token;

    // console.log(token);

    jwt.verify(token, jwt_secretKey, (err, auth) => {
        if (err) {
            res.json({
                experied: true
            })
            throw err;
        } 
        else {
            res.json({
                experied: false
            });
        }
    });

    next();
}

export default JWT_Verify_Token;