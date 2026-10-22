import { useState } from "react";
import TelaMenu from "../components/menu/telaMenu";
import TelaMedicos from "../components/medicos/telaMedicos";
import { Outlet } from "react-router-dom";

function Layouts() {
    const [popupMedicos, setPopupMedicos] = useState<boolean>(false);

    return (
        <>
            <TelaMenu onAbrirMedicos={() => setPopupMedicos(true)}/>

            <Outlet />

            {popupMedicos && (
                <TelaMedicos onFechar={() => setPopupMedicos(false)}/>
            )}
        </>
    );
}

export default Layouts;