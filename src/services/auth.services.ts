
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import userModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({email, password, name}:User) => {
    const checkIs = await userModel.findOne({email});
    if(checkIs) return"Usuario ya existe";
    const passHass = await encrypt(password);
     const newUser = await userModel.create({email, password:passHass, name});
        return newUser;
 };

const loginUser = async ( {email, password}:Auth ) => { 
const checkIs = await userModel.findOne({email});
    if(!checkIs) return"Usuario no existe";
    const passHash =  checkIs.password;
    const itsCorrect = await verified(password, passHash);
    if(!itsCorrect) return "Contraseña incorrecta";
    const token = generateToken(checkIs.email);
   const res = { token,
    user: checkIs} 
    return res ;

};
export { registerNewUser, loginUser };