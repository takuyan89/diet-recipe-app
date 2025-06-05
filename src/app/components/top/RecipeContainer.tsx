import { RecipeList } from '../recipe/RecipeList';

export const RecipeContainer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <h1 className='text-3xl font-bold'>レシピ一覧</h1>
      <RecipeList />
    </div>
  );
};
