import db from "../config/dbConnect";
import { DataTypes } from "sequelize";
import clienteModel from "./cliente.model";

const contactoModel = db.define('contacto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'cliente',
        key:'id'
      }
    }
  }, {
    tableName: 'contacto',
    timestamps:false
  });
  contactoModel.belongsTo(clienteModel, {foreignKey:'cliente_id'});
export default contactoModel;
