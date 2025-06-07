'use client';
import BasicInfo from '@/app/components/recipe/BasicInfo';
import Ingredient from '@/app/components/recipe/Ingredient';
import Step from '@/app/components/recipe/Step';
import { Category, Ingredient as IngredientType, Recipe, Step as StepType } from '@/generated/prisma';
import { use, useEffect, useState } from 'react';

export default function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [recipe, setRecipe] = useState<Recipe & { ingredients: IngredientType[]; steps: StepType[] }>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [adding, setAdding] = useState(false);

  const fetchRecipe = async () => {
    try {
      const data = await fetch(`/api/recipe/${id}`);
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const recipe = await data.json();
      setRecipe(recipe);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
  // カテゴリー取得
  const fetchCategories = async () => {
    try {
      const res = await fetch('/api/category');
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  useEffect(() => {
    fetchRecipe();
    fetchCategories();
  }, []);

  // カテゴリー追加
  const handleAddCategory = async () => {
    if (!selectedCategory) return;
    setAdding(true);
    try {
      const res = await fetch(`/api/recipe/${id}/category`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categoryId: selectedCategory }),
      });
      if (res.ok) {
        fetchRecipe(); // 追加後にレシピ情報を再取得
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
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      <BasicInfo data={recipe} />
      <div className='flex'>
        <Ingredient data={recipe?.ingredients} />
        <Step data={recipe?.steps} />
      </div>
      <div className='mt-6 flex items-center space-x-2'>
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
          className='bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50'
          onClick={handleAddCategory}
          disabled={!selectedCategory || adding}
        >
          追加
        </button>
      </div>
    </div>
  );
}
