import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useToken } from "./hook/useToken";
import { Login } from './page/Login';
import { Home } from './page/Home';
import { CasmPage } from "./page/CasmPage";
import { BergerPage } from "./page/BergerPage";
import { HeaPage } from "./page/HeaPage";

const App = () => {
  const token = useToken()
  if (token) {
    return WebPage()
  } else {
    return LoginPage()
  }
}
const WebPage = () => {

  return (
    <Router>
      <div className="ms-5">
        <Link className="ms-5 nav-link h4" to="/home">Home</Link>
      </div>
      <div>
        <Switch>
          <Route path="/home">
            < Home />
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
        </Switch>
      </div>
    </Router>
  );
}
const LoginPage = () => {
  return (
    <Login />
  )
}

export default App