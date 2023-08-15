import { Request,Response } from "express"
import { handleError } from "../utils/errors.handle"
import servicioModel from "../models/servicio.model";
import equipoModel from "../models/equipo.model";
import clienteModel from "../models/cliente.model";
import contactoModel from "../models/contacto.model";



const getItems= async(req:Request, res:Response)=>{
    try { const resGet= await servicioModel.findAll({
        include: [
          {
            model: equipoModel,
            include: [{model: contactoModel,
                include: [clienteModel]}]
        },
        
            
        ]
      } );
        res.send(resGet)
    }
     catch (e: any) {
        console.log(e,'Error Get Servs')
    }
}
const getItem=async(req:Request, res:Response)=>{
    const {id} = req.params;    
    const product =  await servicioModel.findByPk(id, {
        include: [
          {
            model: equipoModel,
            include: [{model: contactoModel,
                include: [clienteModel]}]
        },
        
            
        ]
      } );

   if(product){
    res.json(product)
    }else{
        res.status(404).json({
            msg: `No existe un servicio con el id ${id}`
        })
    }
}
const postItem= async( req :Request, res:Response)=>{
    const {body} = req;   
    try {
        const product = await servicioModel.create(body);
        res.json({msg: 'Servicio creado', product})
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
            const product =  await servicioModel.findByPk(id);
       if (product) {
       try {
        await product.update(body);
         res.json({msg: 'Producto actualizado', product})
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
    const product =  await servicioModel.findByPk(id);

    if(product){
     await product.destroy()
        res.json({msg: `Producto eliminado`})
     }else{
         res.status(404).json({
             msg: `No existe un producto con el id ${id}`
         })
     }
}

export  { getItems, getItem, postItem, putItem, deleteItem }

