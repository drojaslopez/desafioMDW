import type { Request, Response, NextFunction } from "express";



export const ErrorMDW = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log("MDW Error");
    console.log(err.message)
    res.status(500).send("Algo malo paso, Reintente nuevamente");    
    next();
}



