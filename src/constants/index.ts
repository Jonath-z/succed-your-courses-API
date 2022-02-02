import dontenv from 'dotenv';

dontenv.config();

export const jwt_secretKey:string = `${process.env.JWT_SECRET_KEY}`;


