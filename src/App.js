import './styles/reset.css';
import {BrowserRouter, Route} from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Main from "./layout/main"
import About from "./intro/About"
import JS from "./posts/js/javascript"
import TS from "./posts/ts/typescript"
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main />
        <Route path="/about" component={About}/>
        <Route path="/posts/js" component={JS}/>
        <Route path="/posts/ts" component={TS}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
