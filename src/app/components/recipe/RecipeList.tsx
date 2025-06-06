'use client';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../ui/card/RecipeCard';

export const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    try {
      const data = await fetch('api/recipe');
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await data.json();
      setRecipes(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <RecipeCard data={recipes} />
    </>
  );
};
