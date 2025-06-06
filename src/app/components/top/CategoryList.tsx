'use client';
import { useEffect, useState } from 'react';
import { CategoryCard } from '../ui/card/CategoryCard';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await fetch('api/category');
      if (!data.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes = await data.json();
      setCategories(recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  console.log('categories', categories);

  return (
    <>
      <CategoryCard data={categories} />
    </>
  );
};
