import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { initialState, musicReducer } from "./store/musicReducer";
import { StoreProvider } from "./store/store";


export function App() {
  
  return (
    <StoreProvider initialState={initialState} reducer={musicReducer}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router/>

        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </StoreProvider> 
  )
}
