import "../../styles/medicos/popupMedicos_Pacientes.css";
import { LuStethoscope } from "react-icons/lu";
import { IoCalendarClearOutline } from "react-icons/io5";

function TelaPacientes(){
    return(
        <>
            <div className="sobreposicao">
                <div className="popup_pacientes">
                    <h2 className="titulo_paciente">Pacientes</h2>

                    <div className="cadastrarPacientes_gerenciarPacientes">
                        <div className="cadastro_pacientes">
                            <h2>Cadastrar paciente</h2>

                            <span>Nova consulta ou procedimento</span>
                        </div>

                        <div className="gerenciar_pacientes">
                            <h2>Gerenciar pacientes</h2>

                            <span>Escolha o médico, depois o paciente</span>
                        </div>
                        
                    </div>

                    <hr />

                    <div className="atalhos_container">
                        <span className="atalhos_titulo">Ir para</span>

                        <div className="atalhos_popup">
                            <button className="atalho_medicos">
                                <LuStethoscope className="icone-atalhos"/>
                            
                                Médicos
                            </button>

                            <button className="atalho_agenda">
                                <IoCalendarClearOutline className="icone-atalhos" />

                                Agenda
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TelaPacientes;