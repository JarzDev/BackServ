import db from "../config/dbConnect";
import { DataTypes } from "sequelize";
import equipoModel from "./equipo.model";
import clienteModel from "./cliente.model";



const servicioModel = db.define('servicio',{
    id:{
      type :DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name_serv:{
      type :DataTypes.TEXT,
      allowNull:false
    },
    fecha:{
      type :DataTypes.DATE,
      allowNull:false
    },
    descripcion:{
      type :DataTypes.TEXT,
      allowNull:false
    },
    recomendaciones:{
      type :DataTypes.TEXT,
      allowNull:false
    },
    partes:{
      type :DataTypes.TEXT,
      allowNull:false
    },
    horas_serv:{
      type :DataTypes.INTEGER,
      allowNull:false
    },
    equipo_id:{
      type :DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'equipo',
        key:'id'
      }
    }
 },{
    tableName:'servicio',
    timestamps:false
 });

 servicioModel.belongsTo(equipoModel, {foreignKey:'equipo_id'}); 
 

export default servicioModel;
