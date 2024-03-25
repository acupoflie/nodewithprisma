
import { Request, Response, NextFunction } from "express"

export const login = (req: Request, res: Response, next: NextFunction) => {
    console.log('fuck')
    res.send('login works');
    next();
}