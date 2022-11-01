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
import {UserContextProvider} from "./context/UserContext";


const App = () => {
/*   const token = useToken();

  useEffect(() => {
  }, [token])
 */
  return (
<UserContextProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={< Login />} />
          <Route path="test/:test_id/casm" element={< CasmPage />} />
          <Route path="test/:test_id/berger" element={< BergerPage />} />
          <Route path="test/:test_id/hea" element={< HeaPage />} />
          <Route path="resultado/:test_id" element={< Resultados />} />
        </Routes>
      </Layout>
    </Router>
</UserContextProvider>
  );
}


export default App