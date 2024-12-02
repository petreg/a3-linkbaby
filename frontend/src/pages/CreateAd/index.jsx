import Input from "../../components/Input";
import logoMini from "../../assets/logo-mini.png";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import { useState } from "react";

export default function CreateAd() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [locate, setLocate] = useState('');

  const {isLoading, setIsLoading} = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const id = localStorage.getItem('id');
    if (!description || !value || !locate) {
      alert('Preencha todos os campos');
      return;
    }

    setIsLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}:8080/ad`, {
      method: 'POST',
      body: JSON.stringify({ descricao: description, preco: Number(value), localidade: locate, usuario_id: Number(id) }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('Anúncio criado com sucesso');
        navigate("/meus-anuncios");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Erro ao criar anúncio');
        setIsLoading(false);
      })
  }

  const moneyFormat = (e) => {
    let valor = e.target.value.replace(/\D/g, "");

    valor = (parseInt(valor, 10) / 100).toFixed(2);
    setValue(valor); 
  }

  const blurMoney = (e) => {
    if (e.target.value === "") {
       setValue("0.00");
  }}

  return !isLoading ? (
    <div>
      <img src={logoMini} alt="Logo" />
      <div className="create-account-container">
        <Input type="text" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description} />
        <Input type="text" placeholder="Valor" onChange={moneyFormat} value={value} onBlur={blurMoney} />
        <Input type="text" placeholder="Localidade" onChange={(e) => setLocate(e.target.value)} value={locate}/>
  
      </div>
      <Button onClick={handleClick}>Cadastrar</Button>
  </div>
  ) : <Loading />;
}