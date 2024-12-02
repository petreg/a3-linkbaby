package controllers

import (
	"linkbaby/models"
	"linkbaby/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateAnuncio(c *gin.Context) {
	var newAnuncio models.Anuncio

	if err := c.ShouldBindJSON(&newAnuncio); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	createdAnuncio, err := services.CreateAnuncio(newAnuncio)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, createdAnuncio)
}

func GetAnunciosByEmail(c *gin.Context) {
	email := c.DefaultQuery("email", "")
	if email == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email é obrigatório"})
		return
	}

	anuncios, err := services.GetAnunciosByEmail(email)
	if err != nil {
		c.JSON(http.StatusOK, nil)
		return
	}

	c.JSON(http.StatusOK, anuncios)
}

func GetAllAnuncios(c *gin.Context) {
	anuncios, err := services.GetAllAnuncios()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, anuncios)
}
