import { logger } from "../config/winston";
import { repositorieEspecialidades } from "../repositories/repositorie_especialidades";

// Service responsável pelo cadastro de especialidades médicas
export const serviceEspecialidades = async (nome: string) => {
    try{
        const dadosEspecialidades = await repositorieEspecialidades(nome);

        if(!dadosEspecialidades){
            logger.warn("Dados de especialidade médica não registrada no banco de dados");

            return;
        }

        logger.info("Dados de especialidade médica registrados");

        return (
            {
                message: "Dados de especialidade médica registrado"
            }
        )
    }catch(err: any){
        if(err.code === "23505"){
            throw new Error("Especialidade médica já cadastrada")
        }

        logger.error("Erro ao realizar registro de dados de especialidade médica", {
            error: err
        });

        throw err;
    }
}