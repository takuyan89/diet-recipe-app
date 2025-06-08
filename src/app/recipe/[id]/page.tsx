'use client';
import BasicInfo from '@/app/components/recipe/BasicInfo';
import Ingredient from '@/app/components/recipe/Ingredient';
import Step from '@/app/components/recipe/Step';
import { CategoryCard } from '@/app/components/ui/card/CategoryCard';
import { Category, Ingredient as IngredientType, Recipe, RecipeCategory, Step as StepType } from '@/generated/prisma';
import { use, useEffect, useState } from 'react';

export default function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [recipe, setRecipe] = useState<
    Recipe & {
      ingredients: IngredientType[];
      steps: StepType[];
      categories: (RecipeCategory & { category: Category })[];
    }
  >();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [adding, setAdding] = useState(false);

  const fetchRecipe = async () => {
    try {
      const response = await fetch(`/api/recipe/${id}`);
      if (!response.ok) {
        throw new Error('ネットワークエラー: レシピの取得に失敗しました。');
      }
      const recipe = await response.json();
      setRecipe(recipe);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/category');
      if (!response.ok) throw new Error('ネットワークエラー: カテゴリーの取得に失敗しました。');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRecipe();
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (!selectedCategory) return;
    setAdding(true);
    try {
      const response = await fetch(`/api/recipe/${id}/category`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categoryId: selectedCategory }),
      });
      if (response.ok) {
        fetchRecipe();
        setSelectedCategory('');
      } else {
        alert('カテゴリー追加に失敗しました');
      }
    } catch (e) {
      alert('エラーが発生しました');
    }
    setAdding(false);
  };

  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-[#FAFAF5] space-y-10'>
      <BasicInfo recipe={recipe} />
      <div className='flex flex-col lg:flex-row space-x-50 space-y-3 lg:space-x-5'>
        {recipe && recipe?.ingredients.length > 0 ? <Ingredient data={recipe?.ingredients} /> : <></>}
        {recipe && recipe?.steps.length > 0 ? <Step data={recipe?.steps} /> : <></>}
      </div>
      <div className='mt-6 flex flex-col items-center space-x-2'>
        <div className='space-x-2'>
          <select
            className='border rounded px-2 py-1'
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value=''>カテゴリーを選択</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <button
            className='bg-yellow-300 hover:bg-yellow-500 transition text-black px-3 py-1 rounded disabled:opacity-50 cursor-pointer'
            onClick={handleAddCategory}
            disabled={!selectedCategory || adding}
          >
            追加
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
          {recipe?.categories.map((rc) => (
            <CategoryCard key={rc.category.id} category={rc.category} />
          ))}
        </div>
      </div>
    </div>
  );
}
