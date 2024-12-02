package main

import (
	"linkbaby/controllers"

	"github.com/gin-gonic/gin"

	"github.com/gin-contrib/cors"

	"linkbaby/models"
)

func main() {
	models.ConnectDatabase()

	r := gin.Default()

	r.Use(cors.Default())

	r.POST("/users", controllers.CreateUser)
	r.POST("/users/login", controllers.LoginUser)
	r.GET("/users", controllers.GetUserByEmail)
	r.DELETE("/users/:id", controllers.DeleteUser)

	r.POST("/ad", controllers.CreateAnuncio)
	r.GET("/ad", controllers.GetAnunciosByEmail)
	r.GET("/ads", controllers.GetAllAnuncios)

	r.Run(":8080")
}
