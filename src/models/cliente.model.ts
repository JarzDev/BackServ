import db from "../config/dbConnect";
import { DataTypes } from "sequelize";

const clienteModel = db.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      empresa: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      rut: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING(45),
        allowNull: false
      }
    }, {
      tableName: 'cliente',
      timestamps: false
    });


export default clienteModel;
