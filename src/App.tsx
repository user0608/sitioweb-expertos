import {
  BrowserRouter as Router,
  Routes,
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

  /* const navigate = useNavigate();
  console.log("useHistory", navigate) */
  useEffect(() => {


  }, [token])

  /* if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="/login2" element={< Login />} />
        </Routes>
      </Router>
    )
  } */

  return (

    <Router>
      <Layout>
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="login" element={< Login />} />
            <Route path="test/:test_id/casm" element={< CasmPage />} />
            <Route path="test/:test_id/berger" element={< BergerPage />} />
            <Route path="test/:test_id/hea" element={< HeaPage />} />
            <Route path="resultado/:test_id" element={< Resultados />} />

      </Routes></Layout>
    </Router>

        );
}


        export default App