import { logger } from "../config/winstron";
import { repositorieEspecialidadeMedica } from "../repositories/repositorie_especialidade_medica";

export const serviceEspecialidadeMedica = async (nome: string, ativo: boolean) => {
    try{
        const retornoQueryEspecialidade = await repositorieEspecialidadeMedica(nome, ativo);

        if(!retornoQueryEspecialidade){
            logger.warn("Nenhuma especialidade médica cadastrada");

            return {
                message: "Nenhuma especialidade médica cadastrada"
            }
        }

        return {
            message: "Cadastro da especialidade médica realizado"
        }
    }catch(err: any){
        if(err.code === "23505"){
            throw new Error("Especialidade médica já cadastrada");
        }

        throw err;
    }
}