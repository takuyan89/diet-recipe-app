import { CategoryCard } from '../ui/card/CategoryCard';

//ここでデータフェッチ
const fakeCategories = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Health' },
  { id: 3, name: 'Lifestyle' },
  { id: 4, name: 'Travel' },
  { id: 5, name: 'Food' },
  { id: 6, name: 'Education' },
  { id: 7, name: 'Finance' },
  { id: 8, name: 'Entertainment' },
  { id: 9, name: 'Sports' },
  { id: 10, name: 'Fashion' },
  { id: 11, name: 'Art' },
  { id: 12, name: 'Science' },
  { id: 13, name: 'Politics' },
  { id: 14, name: 'History' },
  { id: 15, name: 'Environment' },
];

export const CategoryList = () => {
  return (
    <>
      <CategoryCard data={fakeCategories} />
    </>
  );
};
