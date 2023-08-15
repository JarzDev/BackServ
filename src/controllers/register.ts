import { Request, Response } from "express"
import { registerNewUser, loginUser } from "../services/auth.services";

const regCtrl = async ({body}:Request, res:Response)=>{
 const respUser = await registerNewUser(body);
 res.send(respUser);
 

}

const loginCtrl = async ({body}:Request, res:Response)=>{
    const {email, password} = body;
    const respUser = await loginUser({email, password});
    res.send(respUser);
}

export {regCtrl, loginCtrl}