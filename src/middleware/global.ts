import type { Request, Response, NextFunction } from "express";

export const globalesMiddleware =(req: Request,res:Response,next:NextFunction)=>{
    console.log("MDW Globales");
    next();
}