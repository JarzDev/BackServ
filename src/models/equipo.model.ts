import db from "../config/dbConnect";
import { DataTypes } from "sequelize";
import contactoModel from "./contacto.model";

const equipoModel = db.define('equipo', {
    id:{
      type :DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    marca:{
      type :DataTypes.STRING(45),
      allowNull:false
    },
    modelo:{
      type :DataTypes.STRING(45),
      allowNull:false
    },
    serial:{
      type :DataTypes.STRING(45),
      allowNull:false
    },
    contador:{
      type :DataTypes.INTEGER,
      allowNull:false
    },
     contacto_id:{
       type :DataTypes.INTEGER,
       allowNull:false,
       references:{
         model:'cliente',
         key:'id'
       }
     }
  }, {
     tableName:'equipo',
     timestamps:false
  });

  equipoModel.belongsTo(contactoModel, {foreignKey:'contacto_id'});

export default equipoModel;
