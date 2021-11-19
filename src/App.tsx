import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useToken } from "./hook/useToken";
import { Login } from './page/Login';
import { Home } from './page/Home';
import { CasmPage } from "./page/CasmPage";
import { BergerPage } from "./page/BergerPage";
import { HeaPage } from "./page/HeaPage";
import Resultados from "./page/Resultados";
import Layout from "./containers/Layout/index";


const App = () => {
  const token = useToken();


    if (!token) {
      return (< Login />)
    }

  return (
    <Router>
      <Layout>
        <Switch>
          
          <Route path="/login">
            < Login />
          </Route>
          <Route path="/test/:test_id/casm">
            < CasmPage />
          </Route>
          <Route path="/test/:test_id/berger">
            < BergerPage />
          </Route>
          <Route path="/test/:test_id/hea">
            < HeaPage />
          </Route>
          <Route path="/resultado/:test_id">
            < Resultados />
          </Route>
          <Route exact path="/">
            < Home />
          </Route>
        </Switch>
    </Layout>
    </Router>

  );
}


export default App