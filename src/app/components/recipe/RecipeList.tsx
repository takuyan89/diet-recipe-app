'use client';
import { useEffect, useState } from 'react';
import { RecipeCard } from '../ui/card/RecipeCard';
import { RecipeListProps } from '@/types/top/types';
import { Category, Recipe } from '@/generated/prisma';

export const RecipeList = ({ keyword, category }: RecipeListProps) => {
  const [recipes, setRecipes] = useState<Recipe[] & { categories: Category[] }>();

  console.log(category);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('api/recipe');
      if (!response.ok) {
        throw new Error('ネットワークエラー: レシピの取得に失敗しました。');
      }
      const recipes = await response.json();

      const filteredRecipes = recipes.filter((recipe: Recipe & { categories: Category[] }) => {
        const matchKeyword = keyword ? recipe.title?.includes(keyword) : true;
        const matchCategory = category ? recipe.categories?.some((c: any) => c.category.name === category) : true;
        return matchKeyword && matchCategory;
      });
      console.log(recipes);
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [keyword, category]);

  return (
    <>
      {recipes && recipes.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className='flex items-center justify-center h-full w-full p-4'>
          <p className='text-black'>レシピがありません。</p>
        </div>
      )}
    </>
  );
};
