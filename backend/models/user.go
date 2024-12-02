package models

type Usuario struct {
	ID        int    `gorm:"primaryKey" json:"id"`
	Nome      string `gorm:"size:100;not null" json:"nome"`
	Email     string `gorm:"unique;not null" json:"email"`
	Telefone  string `gorm:"size:15" json:"telefone"`
	Senha     string `gorm:"not null" json:"senha"`
	Categoria string `gorm:"size:50" json:"categoria"`
}
