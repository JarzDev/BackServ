import { Car } from "../interfaces/car.interface"
import itemModel from "../models/item.model"

const insertCart = async(item:Car) => {
    const resInsert = await  itemModel.create(item)
    return resInsert;
}

const getCarts = async() => {
    const resGet = await itemModel.find({})
    return resGet;
}

const getCart = async(id: string) => {
    const resGet = await itemModel.findOne({_id: id})
    return resGet;
}

const updateCart = async(id: string, item: Car) => {
    const resGet = await itemModel.findOneAndUpdate({_id: id},
        item,
        {new: true}
         );
        return resGet;
}

const deleteCart = async(id: string) => {
    const retGet = await itemModel.findOneAndRemove({_id: id})
    return retGet;
}

export { insertCart, getCarts, getCart, updateCart, deleteCart}

