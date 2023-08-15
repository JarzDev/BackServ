import { Request,Response } from "express"
import { handleError } from "../utils/errors.handle"

import equipoModel from "../models/equipo.model"
import clienteModel from "../models/cliente.model";
import contactoModel from "../models/contacto.model";


const getItems= async(req:Request, res:Response)=>{
    try { const resGet= await equipoModel.findAll({
        include: [
          {
            model: contactoModel,
            include: [clienteModel] }
             ]
      });
        res.send(resGet)
    }
     catch (e: any) {
        handleError(e,'Error Get Items')
    }
}
const getItem=async(req:Request, res:Response)=>{
    const {id} = req.params;    
    const product =  await equipoModel.findByPk(id, {
        include: [
          {
            model: contactoModel,
            include: [clienteModel] }
             ]
      });

   if(product){
    res.json(product)
    }else{
        res.status(404).json({
            msg: `No existe un equipo con el id ${id}`
        })
    }
}
const postItem= async( req :Request, res:Response)=>{
    const {body} = req;   
    try {
        const product = await equipoModel.create(body);
        res.json({msg: 'Equipo creado', product})
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
            const product =  await equipoModel.findByPk(id);
       if (product) {
       try {
        await product.update(body);
         res.json({msg: 'Equipo actualizado', product})
         } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
          }
        }
       else{
            res.status(404).json({
                msg: `No existe un equipo con el id ${id}`
            })
        }
}
const deleteItem= async(req:Request, res:Response)=>{
    const {id} = req.params; 
    const product =  await equipoModel.findByPk(id);

    if(product){
     await product.destroy()
        res.json({msg: `Equipo eliminado`})
     }else{
         res.status(404).json({
             msg: `No existe un equipo con el id ${id}`
         })
     }
}

export  { getItems, getItem, postItem, putItem, deleteItem }

