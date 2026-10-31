import "../../styles/medicos/popupEditarProcedimentos.css";
import { IoClose } from "react-icons/io5";

interface TelaMedicos{
    onFecharPopupEditarProcedimentos: () => void; 
    onAbrirPopupEspecialidadesProcedimentos: () => void;
}

function PopupEditarProcedimentos({onFecharPopupEditarProcedimentos, onAbrirPopupEspecialidadesProcedimentos}: TelaMedicos){
    return(
        <>
            <div className="sobreposicao_popup_editar_procedimentos">
                <div className="popup_editar_procedimentos">
                    <h3 className="titulo_editar_procedimentos">
                        Editar procedimentos

                        <button className="fechar_popup" aria-label="Fechar pop-up" onClick={onFecharPopupEditarProcedimentos}>
                            <IoClose />
                        </button>
                    </h3>

                    <div className="input_select_editar_procedimentos">
                        <div className="nome_input_editar_procedimentos">
                            <span className="nome_editar_procedimentos">Nome</span>

                            <input type="text" className="input_editar_procedimentos"/>
                        </div>

                        <div className="nome_select_editar_procedimentos">
                            <span className="nome_editar_procedimentos">Especialidade</span>

                            <select className="select_editar_procedimentos">
                                <option value="Cardiologia">Cardiologia</option>
                            </select>
                        </div>
                    </div>

                    <div className="cancelar_salvar">
                        <button className="cancelar" onClick={() => {onFecharPopupEditarProcedimentos(); onAbrirPopupEspecialidadesProcedimentos()}}>Cancelar</button>

                        <button className="salvar">Salvar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupEditarProcedimentos;