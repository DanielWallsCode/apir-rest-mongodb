import { Router } from "express";
import { obtenerMensajes,crearMensaje } from "../controllers/contacto.controllers.js";
const router = Router();


router.get('/',obtenerMensajes);
router.post('/',crearMensaje);

export default router;