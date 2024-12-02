import { useState } from "react";
import logoMini from "../../assets/logo-mini.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loading from "../../components/Loading";


import "./styles.css";
import { useAuth } from "../../context/AuthContext";
import Select from "../../components/Select";
import { useNavigate } from "react-router";

export default function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const {isLoading, setIsLoading} = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!name || !email || !password || !confirmPassword || !phone || !category) {
      alert('Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas não conferem');
      return;
    }

    const checkPhone = phone.replace(/\D/g, '');
    if (checkPhone.length < 10 || checkPhone.length > 11) {
      alert('Telefone inválido');
      return;
    }

    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}:8080/users`, {
      method: 'POST',
      body: JSON.stringify({ nome: name, email, telefone: phone, senha: password, categoria: category }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('Conta criada com sucesso');
        navigate("/login");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao criar conta');
        setIsLoading(false);
      })

    
  }

  return !isLoading ? (
        <div>
          <img src={logoMini} alt="Logo" />
          <div className="create-account-container">
            <Input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name} />
            <Input type="phone" placeholder="Telefone" onChange={(e) => setPhone(e.target.value)} value={phone} />
            <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <Input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} />
            <Input type="password" placeholder="Confirme a senha" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
            <Select options={[
              { value: '', label: 'Categoria' },
              { value: 'baba', label: 'Babá' },
              { value: 'responsavel', label: 'Responsável' }
            ]} value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <Button onClick={handleClick}>Cadastrar</Button>
      </div>
      ) : <Loading />;
  
}
