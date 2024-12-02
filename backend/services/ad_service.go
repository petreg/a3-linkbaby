package services

import (
	"linkbaby/models"
	"fmt"
)

func CreateAnuncio(newAnuncio models.Anuncio) (models.Anuncio, error) {
	if err := models.DB.Create(&newAnuncio).Error; err != nil {
		return models.Anuncio{}, err
	}

	return newAnuncio, nil
}

func GetAnunciosByEmail(email string) ([]models.Anuncio, error) {
	var anuncios []models.Anuncio

	err := models.DB.Preload("Usuario").Where("usuario_id IN (SELECT id FROM usuarios WHERE email = ?)", email).Find(&anuncios).Error
	if err != nil {
		return nil, fmt.Errorf("Erro ao buscar anúncios: %v", err)
	}

	return anuncios, nil
}

func GetAllAnuncios() ([]models.Anuncio, error) {
	var anuncios []models.Anuncio

	err := models.DB.Preload("Usuario").Find(&anuncios).Error
	if err != nil {
		return nil, fmt.Errorf("Erro ao buscar todos os anúncios: %v", err)
	}

	return anuncios, nil
}