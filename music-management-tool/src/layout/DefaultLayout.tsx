import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { LayoutContainer } from "./styles";
import { Footer } from "../components/Footer/Footer";

export function DefaultLayout() {
    return (
        <div>
        <Header/>
        <LayoutContainer>
            <Outlet/>
        </LayoutContainer>
        <Footer/>
        </div>
    )
}