import { CategoryCard } from './CategoryCard';

//ここでデータフェッチ
const fakeCategories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Lifestyle' },
  { id: 4, name: 'Travel' },
  { id: 5, name: 'Food' },
  { id: 6, name: 'Education' },
];

export const CategoryList = () => {
  return (
    <>
      <CategoryCard data={fakeCategories} />
    </>
  );
};
