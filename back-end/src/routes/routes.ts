import { Router } from "express";
import { middlewareCadastroMedico } from "../middlewares/middleware_cadastro_medico";
import { middlewareEspecialidadeMedica } from "../middlewares/middleware_especialidade_medica";
import { middlewareCadastroProcedimento } from "../middlewares/middleware_cadastro_procedimento";
import { controllerCastroMedico } from "../controllers/controller_cadastro_medico";
import { controllerEspecialidadeMedica } from "../controllers/controller_especialidade_medica";
import { controllerCadastroProcedimento } from "../controllers/controller_cadastro_procedimento";

export const router = Router();

router.post("/especialidades", middlewareEspecialidadeMedica, controllerEspecialidadeMedica);

router.post("/medicos", middlewareCadastroMedico, controllerCastroMedico);

router.post("/procedimentos", middlewareCadastroProcedimento, controllerCadastroProcedimento);