import "../../styles/medicos/popupEditarEspecialidade.css";
import { IoClose } from "react-icons/io5";

interface TelaMedicos{
    onFecharPupupEditarEspecialidade: () => void;
    onAbrirPopupEspecialidadesProcedimentos: () => void;
}

function PupupEditarEspecialidade({onFecharPupupEditarEspecialidade, onAbrirPopupEspecialidadesProcedimentos}: TelaMedicos){
    return(
        <>
            <div className="sobreposicao_pupup_editar_especialidade">
                <div className="pupup_editar_especialidade">
                    <h3 className="titulo_editar_especialidades">
                        Editar especialidades

                        <button className="fechar_popup" aria-label="Fechar pop-up" onClick={onFecharPupupEditarEspecialidade}>
                            <IoClose />
                        </button>
                    </h3>

                    <div className="nome_input_editar_especialidades">
                        <span className="nome_editar_especialidades">Nome</span>

                        <input type="text" className="input_editar_especialidades"/>
                    </div>

                    <div className="cancelar_salvar">
                        <button className="cancelar" onClick={() => {onFecharPupupEditarEspecialidade(); onAbrirPopupEspecialidadesProcedimentos()}}>Cancelar</button>

                        <button className="salvar">Salvar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PupupEditarEspecialidade;