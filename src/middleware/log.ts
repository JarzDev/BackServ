import { NextFunction, Request, Response } from "express"

const logMiddleware =(req: Request, res:Response, next:NextFunction) => {
    console.log("el Log Por aca !! ");
    const header = req.headers;
    console.log(header);
    const userHeader = header["user-agent"]
    console.log(userHeader, ":este es el user agent");
    next();
}

export  {logMiddleware}