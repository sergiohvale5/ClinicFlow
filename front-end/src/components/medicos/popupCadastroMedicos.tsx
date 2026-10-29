import "../../styles/medicos/popupCadastroMedicos.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface TelaMedicos{
    onFecharCadastrosMedicos: () => void;
    onFecharPopupMedicos: () => void;
    onAbrirPopupMedicos: () => void;
}

function PopupCadastroMedicos({onFecharCadastrosMedicos, onFecharPopupMedicos, onAbrirPopupMedicos}: TelaMedicos){
    const [formaAtendimento, setFormaAtendimento] = useState<string>("");

    return(
        <>
            <div className="sobreposicao_cadastro_medicos">
                <div className="tela_cadastro_medicos">
                    <h2 className="texto_cadastrar_medicos">
                        Cadastrar Médicos

                        <button className="fechar_popup" onClick={() => {onFecharCadastrosMedicos(); onFecharPopupMedicos()}} aria-label="Fechar pop-up">
                            <IoClose />
                        </button>
                    </h2>

                    <div className="inpust_cadastros">
                        <span className="texto">Nome</span>

                        <input type="text" className="input"/>
                    </div>

                    <div className="dados_profissionais">
                        <div className="inpust_cadastros">
                            <span className="texto">CRM</span>

                            <input type="text" className="input"/>
                        </div>

                        <div className="inpust_cadastros">
                            <span className="texto">Especialidade</span>

                            <input type="text" className="input"/>

                            <span className="nova_especialidade">+ Nova especialidade</span>
                        </div>
                    </div>

                    <div className="dados_profissionais">
                        <div className="inpust_cadastros">
                            <span className="texto">Valor da consulta(R$)</span>

                            <input type="text" className="input"/>
                        </div>

                        <div className="inpust_cadastros">
                            <span className="texto">Forma de atendimento</span>

                            <select className="select"
                                value={formaAtendimento}

                                onChange={event => setFormaAtendimento(event.target.value)}
                            >
                                <option value="Normal">Normal</option>
                                <option value="Por hora">Por hora</option>
                            </select>
                        </div>
                    </div>

                    <div className="dados_profissionais">
                        <div className="inpust_cadastros">
                            <span className="texto">Data de atendimento</span>

                            <input type="date" className="input"/>
                        </div>

                        <div className="inpust_cadastros">
                            <span className="texto">Horário de atendimento</span>

                            <input type="time" className="input"/>
                        </div>
                    </div>

                    {
                        formaAtendimento === "Por hora" && (
                            <div className="dados_profissionais">
                                <div className="inpust_cadastros">
                                    <span className="texto">Término do atendimento</span>

                                    <input type="time" className="input_termino_atendimento" />
                                </div>
                            </div>
                        )
                    }

                    <div className="procedimentos_checkbox">
                        <div className="procedimentos">
                            <span className="texto">Procedimentos realizados</span>

                            <span className="novo_procedimento">+ Novo procedimento</span>
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" />
                            
                            <label>Cardiologia</label>
                        </div>
                    </div>

                    <div className="cancelar_salvar">
                        <button className="cancelar" onClick={() => {onFecharCadastrosMedicos(); onAbrirPopupMedicos()}}>Cancelar</button>

                        <button className="salvar" onClick={() => {onFecharCadastrosMedicos(); onFecharPopupMedicos()}}>Salvar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopupCadastroMedicos;