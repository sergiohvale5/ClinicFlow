import { logger } from "../config/winstron";
import { repositorieCadastroProcedimento } from "../repositories/repositorie_cadastro_procedimento";

export const serviceCadastroProcedimento = async (
    nome: string,
    especialidade_id: number,
    ativo: boolean
) => {
    try{
        const retornoQueryProcedimento = await repositorieCadastroProcedimento(
            nome,
            especialidade_id,
            ativo
        );

        if(!retornoQueryProcedimento){
            logger.warn("Nehum procedimento médico cadastrado");

            return {
                message: "Nehum procedimento médico cadastrado"
            }
        }

        return {
            message: "Cadastro do procedimento médico realizado"
        }
    }catch(err: any){
        if(err.code === "23505"){
            throw new Error("Procedimento já cadastrado");
        }

        throw err;
    }
}