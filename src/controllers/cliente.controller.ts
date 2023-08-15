import { Request,Response } from "express"
import { handleError } from "../utils/errors.handle"
import clienteModel from "../models/cliente.model"

const getItems= async(req:Request, res:Response)=>{
    try { const resGet= await clienteModel.findAll();
        res.send(resGet)
        
    }
     catch (e: any) {
        handleError(e,'Error Get Items')
    }
}
const getItem=async(req:Request, res:Response)=>{
    const {id} = req.params;    
    const product =  await clienteModel.findByPk(id);

   if(product){
    res.json(product)
    }else{
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        })
    }
}
const postItem= async( req :Request, res:Response)=>{
    const {body} = req;   
    try {
        const product = await clienteModel.create(body);
        res.json({msg: 'Cliente creado', product})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
    
}
const putItem= async(req:Request, res:Response)=>{
    const {body} = req;   
        const {id} = req.params;
            const product =  await clienteModel.findByPk(id);
       if (product) {
       try {
        await product.update(body);
         res.json({msg: 'Cliente actualizado', product})
         } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
          }
        }
       else{
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            })
        }
}
const deleteItem= async(req:Request, res:Response)=>{
    const {id} = req.params; 
    const product =  await clienteModel.findByPk(id);

    if(product){
     await product.destroy()
        res.json({msg: `Cliente eliminado`})
     }else{
         res.status(404).json({
             msg: `No existe un producto con el id ${id}`
         })
     }
}

export  { getItems, getItem, postItem, putItem, deleteItem }

