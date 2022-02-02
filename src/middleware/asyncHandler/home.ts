import { Request,Response,NextFunction } from "express"

export const homeHandler = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send('home page');
    next();
}