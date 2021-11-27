import {
  BrowserRouter as Router,
  Route,
  useNavigate
} from "react-router-dom";
import { useToken } from "./hook/useToken";
import Login from './page/Login';
import { Home } from './page/Home';
import { CasmPage } from "./page/CasmPage";
import { BergerPage } from "./page/BergerPage";
import { HeaPage } from "./page/HeaPage";
import Resultados from "./page/Resultados";
import Layout from "./containers/Layout/index";
import { useEffect } from "react";


const App = () => {
  const token = useToken();

/*   const navigate = useNavigate();
  console.log("useHistory", navigate) */
  useEffect(() => {
    

  }, [token])

  if (!token) {
    return (
    <Router>
      <Route path="/login">
          < Login />
      </Route>
    </Router>
    )
  }

  return (
    
    <Router>
      <Layout>
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
      <Route path="/home">
        <Home />
      </Route>
    </Layout>
    </Router>

  );
}


export default App