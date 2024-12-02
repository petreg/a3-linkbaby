import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

// Criação do contexto
const AuthContext = createContext();

// Provedor do contexto
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Funções para manipular o estado de autenticação
  const login = async ({user, password}) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    if (user && password) {
      setIsLoading(true);
      fetch(`${apiUrl}:8080/users/login`, {
        method: 'POST',
        body: JSON.stringify({ email: user, senha: password }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.email === user) {
            console.log(data);
            localStorage.setItem('email', data.email);
            localStorage.setItem('id', data.id);
            setIsLoggedIn(true);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false);
        })
    }
  }

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}