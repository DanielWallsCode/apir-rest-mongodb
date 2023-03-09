import { Router } from "express";
import { obtenerProyectos,cearProyecto, actualizarProyecto,eliminarProyecto, obtenerProyecto } from "../controllers/portafolio.controllers.js";

const router = Router();

router.get('/',obtenerProyectos);
router.get('/:id',obtenerProyecto);
router.post('/subir',cearProyecto);
router.put('/editar/:id',actualizarProyecto);
router.delete('/borrar/:id',eliminarProyecto);



export default router;