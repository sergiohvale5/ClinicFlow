import TelaMenu from "../components/menu/telaMenu";
import { Outlet } from "react-router-dom";

function Layouts(){
    return(
        <>
            <TelaMenu />
            
            <Outlet />  
        </>
    );
}

export default Layouts;