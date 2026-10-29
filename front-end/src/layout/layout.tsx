import { useState } from "react";
import TelaMenu from "../components/menu/telaMenu";
import PopupMedicos from "../components/medicos/popupMedicos";
import PopupCadastroMedicos from "../components/medicos/popupCadastroMedicos";
import PopupEspecialidadesProcedimentos from "../components/medicos/popupEspecialidadesProcedimentos";
import PopupCadastrarEspecialidades from "../components/medicos/popupCadastrarEspecialidade";
import PopupCadastrarProcedimento from "../components/medicos/popupCadastrarProcedimento";
import PupupEditarEspecialidade from "../components/medicos/popupEditarEspecialidade";
import PopupEditarProcedimentos from "../components/medicos/popupEditarProcedimentos";
import { Outlet } from "react-router-dom";

function Layouts() {
    const [popupMedicos, setPopupMedicos] = useState<boolean>(false);
    const [popupCadastrosMedicos, setPopupCadastrosMedicos] = useState<boolean>(false);
    const [popupEspecialidadesProcedimentos, setPopupEspecialidadesProcedimentos] = useState<boolean>(false);
    const [popupCadastrarEspecialidades, setPopupCadastrarEspecialidades] = useState<boolean>(false);
    const [popupCadastrarProcedimento, setPopupCadastrarProcedimento] = useState<boolean>(false);
    const [pupupEditarEspecialidade, setPupupEditarEspecialidade] = useState<boolean>(false);
    const [popupEditarProcedimentos, setPopupEditarProcedimentos] = useState<boolean>(false);

    return (
        <>
            <TelaMenu onAbrirPopupMedicos={() => setPopupMedicos(true)}/>

            <Outlet 
                context={
                    {
                        onAbrirPopupEspecialidadesProcedimentos: () => setPopupEspecialidadesProcedimentos(true), 
                        onAbrirCadastrosMedicos: () => setPopupCadastrosMedicos(true)
                    }
                }
            />

            {popupMedicos && (
                <PopupMedicos 
                    onFecharPopupMedicos={() => setPopupMedicos(false)}
                    onAbrirCadastrosMedicos={() => setPopupCadastrosMedicos(true)}
                    onAbrirPopupEspecialidadesProcedimentos={() => setPopupEspecialidadesProcedimentos(true)}
                />
            )}

            {popupCadastrosMedicos && 
                <PopupCadastroMedicos 
                    onFecharCadastrosMedicos={() => setPopupCadastrosMedicos(false)}
                    onFecharPopupMedicos={() => setPopupMedicos(false)}
                    onAbrirPopupMedicos={() => setPopupMedicos(true)}
                />
            }

            {
                popupEspecialidadesProcedimentos && (
                    <PopupEspecialidadesProcedimentos 
                        onFecharPopupEspecialidadesProcedimentos={() => setPopupEspecialidadesProcedimentos(false)}
                        onAbrirPopupMedicos={() => setPopupMedicos(true)}
                        onAbrirPopupCadastrarEspecialidades={() => setPopupCadastrarEspecialidades(true)}
                        onAbrirPopupCadastrarProcedimento={() => setPopupCadastrarProcedimento(true)}
                        onAbrirPupupEditarEspecialidade={() => setPupupEditarEspecialidade(true)}
                        onAbrirPopupEditarProcedimentos={() => setPopupEditarProcedimentos(true)}
                    />
                )
            }

            {
                popupCadastrarEspecialidades && (
                    <PopupCadastrarEspecialidades
                        onFecharPopupCadastrarEspecialidades={() => setPopupCadastrarEspecialidades(false)}
                        onAbrirPopupEspecialidadesProcedimentos={() => setPopupEspecialidadesProcedimentos(true)}
                    />
                )
            }

            {
                popupCadastrarProcedimento && (
                    <PopupCadastrarProcedimento 
                        onFecharPopupCadastrarProcedimento={() => setPopupCadastrarProcedimento(false)}
                        onAbrirPopupEspecialidadesProcedimentos={() => setPopupEspecialidadesProcedimentos(true)}
                    />
                )    
            }

            {
                pupupEditarEspecialidade && (
                    <PupupEditarEspecialidade 
                        onFecharPupupEditarEspecialidade={() => setPupupEditarEspecialidade(false)}
                        onAbrirPopupEspecialidadesProcedimentos={() => setPopupEspecialidadesProcedimentos(true)}
                    />
                )
            }

            {
                popupEditarProcedimentos && (
                    <PopupEditarProcedimentos 
                        onFecharPopupEditarProcedimentos={() => setPopupEditarProcedimentos(false)}
                        onAbrirPopupEspecialidadesProcedimentos={() => setPopupEspecialidadesProcedimentos(true)}
                    />
                )
            }
        </>
    );
}

export default Layouts;