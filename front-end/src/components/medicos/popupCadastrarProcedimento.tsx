import "../../styles/medicos/popupCadastrarProcedimento.css";
import { IoClose } from "react-icons/io5";

interface TelaMedicosProps {
    onFecharPopupCadastrarProcedimento: () => void;
    onAbrirPopupEspecialidadesProcedimentos: () => void;
}

function PopupCadastrarProcedimento({onFecharPopupCadastrarProcedimento, onAbrirPopupEspecialidadesProcedimentos}: TelaMedicosProps){
    return(
        <>
            <div className="sobreposicao_popup_cadastrar_procedimento">
                <div className="popup_cadastrar_procedimento">
                    <h3 className="titulo_cadastrar_procedimento">
                        Cadastrar procedimento

                        <button className="fechar_popup" onClick={onFecharPopupCadastrarProcedimento} aria-label="Fechar pop-up">
                            <IoClose />
                        </button>
                    </h3>

                    <div className="nome_input_select_procedimento">
                        <div className="nome_inpur_procedimento">
                            <span className="nome_procedimento">Nome</span>

                            <input type="text" className="input_procedimento" placeholder="Ex.: Us de tireoide"/>
                        </div>

                        <div className="nome_select_procedimento">
                            <span className="nome_procedimento">Especialidade</span>

                            <select className="select_procedimento">
                                <option value="Clinico geral">Clinico geral</option>
                            </select>
                        </div>

                        <div className="calcelar_salvar_popup">
                            <button className="cancelar_popup" onClick={() => {onFecharPopupCadastrarProcedimento(); onAbrirPopupEspecialidadesProcedimentos()}}>
                                Cancelar
                            </button>

                            <button className="salvar_popup" onClick={onFecharPopupCadastrarProcedimento}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupCadastrarProcedimento;