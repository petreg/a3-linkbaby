import PropTypes from "prop-types"
import "./styles.css"

export default function FlatList({ data }) {
  
  const renderItems = () => {
    return data.map((item) => <li key={item.id}>{item.descricao} R$ {item.preco}</li>)
  }

  const renderEmpty = () => <li>{`Você não possui anúncios, clique no "+" para criar seu primeiro`}</li>

  return (
    <ul>
      {data && data.length > 0 ? renderItems() : renderEmpty()}
    </ul>
  )
}

FlatList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      descricao: PropTypes.string,
      preco: PropTypes.number,
    })
  ),
}