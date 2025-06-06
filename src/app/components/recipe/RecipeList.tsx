'use client';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../ui/card/RecipeCard';

type Props = {
  keyword: string;
};

export const RecipeList = ({ keyword }: Props) => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    try {
      const data = await fetch('api/recipe');
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await data.json();
      // 🔍 フィルタ処理（簡易例）
      const filtered = keyword
        ? recipes.filter((r: any) => r.title?.toLowerCase().includes(keyword.toLowerCase()))
        : recipes;
      setRecipes(filtered);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, [keyword]);

  return (
    <>
      <RecipeCard data={recipes} />
    </>
  );
};
