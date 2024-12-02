package models

type Anuncio struct {
	ID         int     `json:"id"`
	Descricao  string  `json:"descricao"`
	Preco      float64 `json:"preco"`
	Localidade string  `json:"localidade"`
	UsuarioID  int     `json:"usuario_id"`
	Usuario    Usuario `json:"usuario"`
}
