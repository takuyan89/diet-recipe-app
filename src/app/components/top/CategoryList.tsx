'use client';
import { useEffect, useState } from 'react';
import { CategoryCard } from '../ui/card/CategoryCard';
import { Category } from '@/generated/prisma';

export const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('api/category');
      if (!response.ok) {
        throw new Error('ネットワークエラー: カテゴリーの取得に失敗しました。');
      }
      const recipes = await response.json();
      setCategories(recipes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
      {categories.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
};
