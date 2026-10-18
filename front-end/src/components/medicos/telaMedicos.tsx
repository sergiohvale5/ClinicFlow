import "../../styles/medicos/telaMedicos.css";

function TelaMedicos(){
    return(
        <>
            <div className="sobreposicao">
                <div className="tela_medicos">
                    <h2 className="titulo_medico">Médicos</h2>

                    <div className="cadastroMedicos__medicosCadastrados">
                        <div className="cadastro_medicos">
                            <h2>Cadastrar médico</h2>

                            <span>Novo médico e agenda de atendimento</span>
                        </div>

                        <div className="medicos_cadastrados">
                            <h2>Médicos cadastrados</h2>

                            <span>Editar ou excluir</span>
                        </div>
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