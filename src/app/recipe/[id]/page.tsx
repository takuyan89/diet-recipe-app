'use client';
import BasicInfo from '@/app/components/recipe/BasicInfo';
import Ingredient from '@/app/components/recipe/Ingredient';
import Step from '@/app/components/recipe/Step';
import { Ingredient as IngredientType, Recipe, Step as StepType } from '@/generated/prisma';
import { use, useEffect, useState } from 'react';

export default function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [recipe, setRecipe] = useState<Recipe & { ingredients: IngredientType[]; steps: StepType[] }>();
  const fetchRecipe = async () => {
    try {
      const data = await fetch(`/api/recipe/${id}`);
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await data.json();
      setRecipe(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      <BasicInfo data={recipe} />
      <div className='flex'>
        <Ingredient data={recipe?.ingredients} />
        <Step data={recipe?.steps} />
      </div>
    </div>
  );
}
