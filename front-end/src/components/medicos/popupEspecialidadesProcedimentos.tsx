import "../../styles/medicos/popupEspecialidadesProcedimentos.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface TelaMedicosProps {
    onFecharPopupEspecialidadesProcedimentos: () => void;
    onAbrirPopupMedicos: () => void;
    onAbrirPopupCadastrarEspecialidades: () => void;
    onAbrirPopupCadastrarProcedimento: () => void;
    onAbrirPupupEditarEspecialidade: () => void;
    onAbrirPopupEditarProcedimentos: () => void;
}

function PopupEspecialidadesProcedimentos({ onFecharPopupEspecialidadesProcedimentos, onAbrirPopupMedicos, onAbrirPopupCadastrarEspecialidades, onAbrirPopupCadastrarProcedimento, onAbrirPupupEditarEspecialidade, onAbrirPopupEditarProcedimentos }: TelaMedicosProps){
    const [secaoAtiva, setSecaoAtiva] = useState<boolean>(false);

    return(
        <>
            <div className="sobreposicao_popup_especialidades_procedimentos">
                <div className="popup_especialidades_procedimentos">
                    <h3 className="titulo_especialidades_proceedimentos">
                        Especialidades e procedimentos
 
                        <button className="fechar_popup" onClick={onFecharPopupEspecialidadesProcedimentos}  aria-label="Fechar pop-up">
                            <IoClose />
                        </button>
                    </h3>

                    <div className="btn_especialidades_procedimentos_cadastroEspecialidades">
                        <div className="btns_especialidades_procedimentos">
                            <button className={secaoAtiva ? "btn_especialidades_1" : "btn_especialidades_0"} onClick={() => {setSecaoAtiva(false); setSecaoAtiva(false)}}>
                                Especialidades
                            </button>

                            <button className={secaoAtiva ? "btn_procedimentos_0" : "btn_procedimentos_1"} onClick={() => {setSecaoAtiva(true); setSecaoAtiva(true)}}>
                                Procedimentos
                            </button>
                        </div>

                        {secaoAtiva ?
                            <button className="btn_cadastroProcedimentos" onClick={() => {onFecharPopupEspecialidadesProcedimentos(); onAbrirPopupCadastrarProcedimento()}}>
                                Cadastrar procedimento
                            </button>
                            :
                            <button className="btn_cadastroEspecialidades" onClick={() => {onFecharPopupEspecialidadesProcedimentos(); onAbrirPopupCadastrarEspecialidades()}}>
                                Cadastrar especialidade
                            </button>
                        }
                    </div>

                    <div className="tabela_especialidades_procedimentos">
                        {secaoAtiva ? 
                            <div className="tabela_procedimentos">
                                <div className="dados_cabecalho_procedimentos">
                                    <span>Nome</span>

                                    <span>Especialidade</span>

                                    <span>Médicos</span>

                                    <span>Consultas</span>

                                    <span>Situação</span>
                                </div>

                                <div className="dados_linha_procedimentos">
                                    <span>Consulta</span>

                                    <span>Cardiologia</span>

                                    <span>1</span>
                                    <span>2</span>


                                    <span className="situacao_procedimento">Ativa</span>

                                    <div className="acoes_procedimentos">
                                        <button className="btn_editar_procedimento" onClick={() => {onFecharPopupEspecialidadesProcedimentos(); onAbrirPopupEditarProcedimentos()}}>Editar</button>

                                        <button className="btn_inativar_procedimento">Inativar</button>

                                        <button className="btn_excluir_procedimento">Excluir</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="tabela_especialidades">
                                <div className="dados_especialidades">
                                    <span>Nome</span>

                                    <span>Médicos</span>
                                    
                                    <span>Procedimentos</span>

                                    <span>Situação</span>
                                </div>

                                <div className="dados">
                                    <span>Clínica geral</span>

                                    <span>2</span>

                                    <span>8</span>

                                    <span className="situacao_especialidade">Ativa</span>

                                    <div className="acoes_especialidades">
                                        <button className="btn_editar_especialidade" onClick={() => {onFecharPopupEspecialidadesProcedimentos(); onAbrirPupupEditarEspecialidade()}}>Editar</button>

                                        <button className="btn_inativar_especialidade">Inativar</button>

                                        <button className="btn_excluir_especialidade">Excluir</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="fechar_popup_especialidades_procedimentos">
                        <button className="btn_cancelar_popup_especialidades_procedimentos" onClick={() => {onFecharPopupEspecialidadesProcedimentos(); onAbrirPopupMedicos()}}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupEspecialidadesProcedimentos;