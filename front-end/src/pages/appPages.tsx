import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "../layout/layout";
import TelaPacientes from "../components/pacientes/telaPacientes";
import TelaMedicos from "../components/medicos/telaMedicos";
import TelaAgendas from "../components/agendas/telaAgendas";
import TelaMedicosCadastrados from "../components/medicos/telaMedicosCadastrados";

function AppPages(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/clinic_flow" element={<Layouts />}>
                        <Route index element={<TelaAgendas />} />
                        <Route path="agendamentos" element={<TelaAgendas />}/>
                        <Route path="medicos" element={<TelaMedicos />} />
                        <Route path="pacientes" element={<TelaPacientes />}/>
                        <Route path="medicos_cadastrados" element={<TelaMedicosCadastrados />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppPages;