import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Components/RecipeList.css';

const RecipeList = ({ recipes, toggleFavorite, favorites }) => {
  return (
    <Row className="recipe-list">
      {recipes.map((recipe) => {
        const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);
        const recipeUrl = `https://www.themealdb.com/meal/${recipe.idMeal}`;

        return (
          <Col xs={12} sm={6} md={4} lg={3} key={recipe.idMeal} className="mb-4">
            <Card className="recipe-card">
              <Card.Img variant="top" src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
              <Card.Body>
                <Card.Title>{recipe.strMeal}</Card.Title>
                <Card.Text>{recipe.strArea} Cuisine</Card.Text>
                <Button 
                  variant={isFavorite ? "danger" : "outline-secondary"} 
                  onClick={() => toggleFavorite(recipe)}
                  className={`favorite-button ${isFavorite ? 'active' : ''}`}
                >
                  <FontAwesomeIcon icon={isFavorite ? faTrash : faHeart} />
                </Button>
                <a href={recipeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">View Recipe</a>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default RecipeList;
