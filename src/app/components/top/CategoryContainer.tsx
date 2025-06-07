import { CategoryList } from './CategoryList';

export const CategoryContainer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full p-4 space-y-5'>
      <h1 className='text-3xl font-bold'>カテゴリ一覧</h1>
      <CategoryList />
    </div>
  );
};
