import { BrowserRouter as Router, Route, Routes } from "react-router";
import PrivateRoute from "./src/components/ProtectedRoute";
import Login from "./src/pages/Login";
import CreateAccount from "./src/pages/CreateAccount";
import ListAd from "./src/pages/ListAd";
import CreateAd from "./src/pages/CreateAd";
import App from "./src/App";

export default function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CreateAccount />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        />
        <Route
          path="/meus-anuncios"
          element={
            <PrivateRoute>
              <ListAd />
            </PrivateRoute>
          }
        />
        <Route
          path="/novo-anuncio"
          element={
            <PrivateRoute>
              <CreateAd />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}