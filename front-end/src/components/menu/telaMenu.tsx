import "../../styles/menu/telaMenu.css";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";
import { LuStethoscope } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";

function TelaMenu(){
    const [efeitoMenu, setEfeitoMenu] = useState<boolean>(false);
    const [modoEscuro, setModoEscuro] = useState<boolean>(false);

    return(
        <>
            <div className={
                    efeitoMenu ? 
                    (modoEscuro ? "telaMenuAbertaNoturno" : "telaMenuAberta")
                    : 
                    (modoEscuro ? "telaMenuFechadaNoturno" : "telaMenuFechada")
                }>
                <h2 className={modoEscuro ? "nome_app_noturno" : "nome_app"}>
                    {!efeitoMenu ? <></> : <span>ClinicFlow</span>}

                    {
                        !efeitoMenu ?

                        <BsChevronDoubleRight className="icone_seta_direita"
                            onClick={() => setEfeitoMenu(!efeitoMenu)}
                        />

                        :

                        <BsChevronDoubleLeft className="icone_seta_esquerda"
                            onClick={() => setEfeitoMenu(!efeitoMenu)}
                        />
                    }
                </h2>

                <Link to="/clinic_flow/agendamentos" className="link_menu">
                    <div className={modoEscuro ? "menu_agenda_noturno" : "menu_agenda"}>
                        <LuCalendar className="icon_calendario"/>

                        {!efeitoMenu ? <></> : <span>Agenda</span>}
                    </div>
                </Link>

                <Link to="/clinic_flow/medicos" className="link_menu">
                    <div className={modoEscuro ? "menu_medicos_noturno" : "menu_medicos"}>
                        <LuStethoscope className="icon_medico"/>

                        {!efeitoMenu ? <></> : <span>Médicos</span>}
                    </div>
                </Link>

                <Link to="/clinic_flow/pacientes" className="link_menu">
                    <div className={modoEscuro ? "menu_pacientes_noturno" : "menu_pacientes"}>
                        <LuUser className="icon_paciente"/>

                        {!efeitoMenu ? <></> : <span>Pacientes</span>}
                    </div>
                </Link>

                <span className="divisor"></span>

                <div className={modoEscuro ? "modo_claro" : "modo_escuro"} onClick={() => setModoEscuro(!modoEscuro)}>
                    {
                        modoEscuro ?
                        <LuSun className="icon_sol"/>
                        :
                        <LuMoon className="icon_lua"/>
                    }

                    {
                        efeitoMenu && (
                            <span>
                                {modoEscuro ? "Modo claro" : "Modo escuro"}
                            </span>
                        )
                    }
                </div>
                
            </div>
        </>
    );
}

export default TelaMenu;