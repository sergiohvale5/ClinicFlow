import { Router } from "express";
import { middlewareEspecialidades } from "../middlewares/middleware_especialidades";
import { controllerEspecialidades } from "../controllers/controller_especialidades";

export const router = Router();

//Rotas de especialidades
router.post("/especialidades", middlewareEspecialidades, controllerEspecialidades);