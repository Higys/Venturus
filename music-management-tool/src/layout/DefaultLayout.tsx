import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { AppContainer, LayoutContainer } from "./styles";
import { Footer } from "../components/Footer/Footer";

export function DefaultLayout() {
    return (
        <AppContainer>
        <Header/>
        <LayoutContainer>
            <Outlet/>
        </LayoutContainer>
        <Footer/>
        </AppContainer>
    )
}