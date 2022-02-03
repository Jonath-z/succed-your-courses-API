import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';
import { jwt_secretKey } from "../../constants";

const get_JWT_Token = async (
    req: Request,
    res: Response,
    next:NextFunction
) => {

    console.log(req.body);

    const name: string = req.body.name;
    const email: string = req.body.email;
    const id: string = req.body.userID;

    const user = {
        name,
        email,
        id
    }

    jwt.sign({ user }, jwt_secretKey, { expiresIn: '5min' }, (err, token) => {
        if (err) throw err;
        res.json({
            token
        });
    });

    next();
}

export default get_JWT_Token;