import "../../styles/medicos/telaMedicosCadastrados.css";
import { useOutletContext } from "react-router-dom";

interface TelaMedicosContext {
    onAbrirPopupEspecialidadesProcedimentos: () => void;
    onAbrirCadastrosMedicos: () => void;
}

function TelaMedicosCadastrados(){
    const {onAbrirPopupEspecialidadesProcedimentos, onAbrirCadastrosMedicos} = useOutletContext<TelaMedicosContext>();

    return(
        <>
            <div className="TelaMedicosCadastrados">
                <div className="atalhos">
                    <div className="texto_medicos">
                        <h2 className="titulo_medicos_cadastrados">Médicos Cadastrados</h2>

                        <span className="texto_gerenciamento_atendimento">Gerencie os médicos e agenda de atendimento de cada um.</span>
                    </div>

                    <div className="btn_atalhos">
                        <button className="btn_especialidades_procedimentos" onClick={onAbrirPopupEspecialidadesProcedimentos}> 
                            Especialidades e procedimentos
                        </button>

                        <button className="btn_cadastrar_medicos" onClick={onAbrirCadastrosMedicos}>
                            Cadastrar médico
                        </button>
                    </div>
                </div>

                <div className="tabela_cadastro_medicos">
                    <div className="dados_cadastro_medico">
                        <span>Nome</span>

                        <span>CRM</span>

                        <span>Especialidade</span>

                        <span>Valor da consulta</span>

                        <span>Atendimento</span>

                        <span>Pacientes</span>
                    </div>

                    <div className="dados_medicos">
                        <span className="nome_doutor">Dr. Alysson Duarte</span>

                        <span>CRM-MA 1234</span>

                        <span>Clínica Geral</span>

                        <span>R$ 300,00</span>

                        <span>02/10/2026 14:00</span>

                        <span>4</span>

                        <div className="btn_editar_excluir">
                            <button className="btn_editar" onClick={onAbrirCadastrosMedicos}>Editar</button>

                            <button className="btn_excluir">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TelaMedicosCadastrados;