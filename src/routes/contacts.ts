import { Router} from "express";
import { getItems, getItem, postItem, putItem, deleteItem } from "../controllers/contacto.controller";
import FireAuth from "../middleware/firelog";
import logBasicAuth from "../middleware/basic";

const router = Router();

router.get('/', FireAuth, getItems );
router.get('/:id', FireAuth, getItem);
router.post('/',  FireAuth, postItem);
router.put('/:id', FireAuth, putItem);
router.delete('/:id', logBasicAuth, deleteItem);

export {router};