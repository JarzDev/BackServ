import { DataTypes, Model } from 'sequelize';
import db from "../config/dbConnect";



const User = db.define('user',{
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: 'Descripcion Vacia',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
 
  modelName: 'users',
  timestamps: true,
  
});

export default User;
