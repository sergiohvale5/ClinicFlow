import "../../styles/medicos/telaMedicos.css";
import { Link } from "react-router-dom";

function TelaMedicos(){
    return(
        <>
            <div className="sobreposicao">
                <div className="tela_medicos">
                    <h2 className="titulo_medico">Médicos</h2>

                    <div className="cadastroMedicos_medicosCadastrados">
                        <div className="cadastro_medicos">
                            <h2>Cadastrar médico</h2>

                            <span>Novo médico e agenda de atendimento</span>
                        </div>

                        <Link to="/clinic_flow/medicos_cadastrados" className="link">
                            <div className="medicos_cadastrados">
                                <h2>Médicos cadastrados</h2>

                                <span>Editar ou excluir</span>
                            </div>
                        </Link>
                    </div>

                    <div className="especialidades_procedimentos">
                        <h2>Especialidades e procedimentos</h2>

                        <span>Cadastrar, editar ou inativar</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TelaMedicos;