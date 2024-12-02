package services

import (
	"linkbaby/models"
	"errors"
)

var users []models.Usuario

func CreateUser(newUser models.Usuario) (models.Usuario, error) {
	var existingUser models.Usuario

	if err := models.DB.Where("email = ?", newUser.Email).First(&existingUser).Error; err == nil {
		return models.Usuario{}, errors.New("email already exists")
	}

	if err := models.DB.Create(&newUser).Error; err != nil {
		return models.Usuario{}, err
	}

	return newUser, nil
}

func LoginUser(email, senha string) (models.Usuario, error) {
	var user models.Usuario

	if err := models.DB.Where("email = ?", email).First(&user).Error; err != nil {
		return models.Usuario{}, errors.New("invalid email or password")
	}

	if user.Senha != senha {
		return models.Usuario{}, errors.New("invalid email or password")
	}

	return user, nil
}

func GetAllUsers() []models.Usuario {
	return users
}

func DeleteUser(id int) (bool, error) {
	for i, user := range users {
		if user.ID == id {
			users = append(users[:i], users[i+1:]...)
			return true, nil
		}
	}
	return false, nil
}
