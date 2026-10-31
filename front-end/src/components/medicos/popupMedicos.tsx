import "../../styles/medicos/popupMedicos_Pacientes.css";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface TelaMedicosProps {
    onFecharPopupMedicos: () => void;
    onAbrirCadastrosMedicos: () => void;
    onAbrirPopupEspecialidadesProcedimentos: () => void;
}

function PopupMedicos({ onFecharPopupMedicos, onAbrirCadastrosMedicos, onAbrirPopupEspecialidadesProcedimentos}: TelaMedicosProps){
    return(
        <>
            <div className="sobreposicao">
                <div className="popup_medicos">
                    <h2 className="titulo_medico">
                        Médicos

                        <button className="fechar_popup" onClick={onFecharPopupMedicos} aria-label="Fechar pop-up">
                            <IoClose />
                        </button>
                    </h2>

                    <div className="cadastroMedicos_medicosCadastrados">
                        <div className="cadastro_medicos" onClick={() => {onFecharPopupMedicos(); onAbrirCadastrosMedicos()}}>
                            <h2>Cadastrar médico</h2>

                            <span>Novo médico e agenda de atendimento</span>
                        </div>

                        <Link to="/clinic_flow/medicos_cadastrados" className="link" onClick={onFecharPopupMedicos}>
                            <div className="medicos_cadastrados">
                                <h2>Médicos cadastrados</h2>

                                <span>Editar ou excluir</span>
                            </div>
                        </Link>
                        
                    </div>

                    <div className="especialidades_procedimentos" onClick={() => {onAbrirPopupEspecialidadesProcedimentos(); onFecharPopupMedicos()}}>
                        <h2>Especialidades e procedimentos</h2>

                        <span>Cadastrar, editar ou inativar</span>
                    </div>

                    <hr />

                    <div className="atalhos_container">
                        <span className="atalhos_titulo">Ir para</span>

                        <div className="atalhos_popup_medicos">
                            <Link to="/clinic_flow/pacientes" className="link_pacientes" onClick={onFecharPopupMedicos}>
                                <button className="atalho_pacientes">
                                    <AiOutlineUser className="icone-atalhos"/>
                                
                                    Pacientes
                                </button>
                            </Link>

                            <Link to="/clinic_flow/agendamentos" className="link_agenda" onClick={onFecharPopupMedicos}>
                                <button className="atalho_agenda">
                                    <IoCalendarClearOutline className="icone-atalhos" />

                                    Agenda
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupMedicos;