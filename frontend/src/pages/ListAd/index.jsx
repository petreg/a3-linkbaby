import { useEffect, useState } from "react";
import FlatList from "../../components/FlatList";
import FloatButton from "../../components/FloatButton";
import logoMini from "../../assets/logo-mini.png";

export default function ListAd() {
  const [email, setEmail] = useState(null);
  const [id, setId] = useState(null);
  const [ads, setAds] = useState(null);

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
    setId(localStorage.getItem('id'));
  }, []);

  useEffect(() => {
    if (!email || !id) return;
    const apiUrl = import.meta.env.VITE_API_URL;
    
    fetch(`${apiUrl}:8080/ad?email=${email}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      setAds(data);
    })
    .catch (e => {
    console.log(e);
    alert('Erro ao buscar anúncios');
    })
  }, [email]);

console.log(ads);

  return (
    <div>
      <img src={logoMini} alt="Logo" />
      <div className="container">
          <FlatList data={ads} />
          <FloatButton link={"/novo-anuncio"} />
      </div>
    </div>
  );
}