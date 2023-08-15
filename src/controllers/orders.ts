import { Request,Response } from "express"
import { handleError } from "../utils/errors.handle"
import { JwtPayload } from "jsonwebtoken"

interface RequestWithUser extends Request {
  
    user?: string | JwtPayload,

}

const getItems= async(req:RequestWithUser, res:Response)=>{
    try { res.send( { data:'solo lo ven logeados con JWT',
                     user: req.user})
  
}
     catch (e: any) {
        handleError(e,'Error Get Items')
    }
}


export  { getItems}

