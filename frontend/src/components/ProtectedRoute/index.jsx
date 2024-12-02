import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}