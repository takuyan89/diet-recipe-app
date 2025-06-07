'use client';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../ui/card/RecipeCard';

type Props = {
  keyword?: string;
  category?: string;
};

export const RecipeList = ({ keyword, category }: Props) => {
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = async () => {
    try {
      const data = await fetch('api/recipe');
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await data.json();
      // 🔍 フィルタ処理（keyword & category対応）
      const filteredRecipes = recipes.filter((recipe: any) => {
        const matchKeyword = keyword ? recipe.title?.toLowerCase().includes(keyword.toLowerCase()) : true;
        const matchCategory = category ? recipe.category?.toLowerCase() === category.toLowerCase() : true;
        return matchKeyword && matchCategory;
      });
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, [keyword, category]);

  return (
    <>
      {recipes.length === 0 ? (
        <div className='flex items-center justify-center h-full w-full bg-gray-200 p-4'>
          <p className='text-gray-600'>レシピがありません。</p>
        </div>
      ) : (
        <RecipeCard data={recipes} />
      )}
    </>
  );
};
