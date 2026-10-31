import "../../styles/medicos/popupCadastrarEspecialidades.css";
import { IoClose } from "react-icons/io5";

interface TelaMedicosProps {
    onFecharPopupCadastrarEspecialidades: () => void;
    onAbrirPopupEspecialidadesProcedimentos: () => void;
}

function PopupCadastrarEspecialidades({onFecharPopupCadastrarEspecialidades, onAbrirPopupEspecialidadesProcedimentos}: TelaMedicosProps){
    return(
        <>
            <div className="sobreposicao_popup_cadastrar_especialidades">
                <div className="popup_cadastrar_especialidades">
                    <h3 className="titulo_cadastrar_especialidade">
                        Cadastrar especialidade

                        <button className="fechar_popup" onClick={onFecharPopupCadastrarEspecialidades} aria-label="Fechar pop-up">
                            <IoClose />
                        </button>
                    </h3>

                    <div className="nome_input_especialidade">
                        <span className="nome_especialidade">Nome</span>

                        <input type="text" placeholder="Ex.: Pediatria" className="input_especialidade"/>
                    </div>

                    <div className="calcelar_salvar_popup">
                        <button className="cancelar_popup" onClick={() => {onFecharPopupCadastrarEspecialidades(); onAbrirPopupEspecialidadesProcedimentos()}}>
                            Cancelar
                        </button>

                        <button className="salvar_popup" onClick={onFecharPopupCadastrarEspecialidades}>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupCadastrarEspecialidades;