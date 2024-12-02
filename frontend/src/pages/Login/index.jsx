import { useState } from "react";
import { NavLink } from "react-router";
import Input from "../../components/Input";

import "./styles.css";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthContext";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  console.log(apiUrl);

  const handleClick = async () => {
    if (!email || !password) {
      alert('Preencha os campos de email e senha.');
      return;
    }
    try{
      await login({user: email, password });
      navigate('/meus-anuncios');
    } catch (e) {
      console.log(e);
      alert('Erro ao realizar login');
    }
  }
  return (
    isLoading ? <Loading/> : (
      <div>
        <div>
          <img src={logo} alt="Logo" />
          <h3>Já possui cadastro?</h3>
          <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <Input type="password" placeholder="Senha"  onChange={e => setPassword(e.target.value)}/>
          <Button onClick={() => handleClick()}>Entrar</Button>
        </div>
        <NavLink to="/cadastro">Ainda não possui cadastro? Cadastre-se</NavLink>
      </div>
  ));
}
