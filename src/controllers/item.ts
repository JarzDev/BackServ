import { Request,Response } from "express"
import { handleError } from "../utils/errors.handle"
import {getCarts, insertCart, getCart, updateCart, deleteCart} from "../services/item.services"

const getItems= async(req:Request, res:Response)=>{
    try { const resGet= await getCarts();
        res.send(resGet)
    }
     catch (e: any) {
        handleError(e,'Error Get Items')
    }
}
const getItem=async({params}:Request, res:Response)=>{
    try {  const {id} = params
        const resGet= await getCart(id);
        const data = resGet ? resGet : 'No data found'
        res.send(data)
    }
    catch (e: any) {
        handleError(e,'Error Get Items')
    }
}
const postItem= async( req :Request, res:Response)=>{
    try { 
       const resItem =  await insertCart(req.body)
       res.send(resItem)
    }
    catch (e) {
        handleError(res,'Error Get Items',e)
    }
}
const putItem= async({params, body}:Request, res:Response)=>{
    try { const {id} = params
    const resGet= await updateCart(id, body);
    res.send(resGet)

    }
    catch (e) {
        handleError(res,'Error Get Items')
    }
}
const deleteItem= async({params}:Request, res:Response)=>{
    try {const {id} = params
    const resGet= await deleteCart(id);
    res.send(resGet)

    }
    catch (e) {
        handleError(res,'Error Get Items')
    }
}

export  { getItems, getItem, postItem, putItem, deleteItem }

