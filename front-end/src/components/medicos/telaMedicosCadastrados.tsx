import "../../styles/medicos/telaMedicosCadastrados.css";

function TelaMedicosCadastrados(){
    return(
        <>
            <div className="TelaMedicosCadastrados">
                <div className="atalhos">
                    <div className="texto_medicos">
                        <h2 className="titulo_medicos_cadastrados">Médicos Cadastrados</h2>

                        <span className="texto_gerenciamento_atendimento">Gerencie os médicos e agenda de atendimento de cada um.</span>
                    </div>

                    <div className="btn_atalhos">
                        <button className="btn_especialidades_procedimentos">
                            Especialidades e procedimentos
                        </button>

                        <button className="btn_cadastrar_medicos">
                            Cadastrar médico
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TelaMedicosCadastrados;