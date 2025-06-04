import { CategoryList } from './CategoryList';

export const CategoryContainer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-400 p-4'>
      <h1 className='text-3xl font-bold'>カテゴリ一覧</h1>
      <CategoryList />
    </div>
  );
};
