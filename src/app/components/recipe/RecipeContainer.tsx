import { RecipeList } from '../recipe/RecipeList';

export const RecipeContainer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <RecipeList />
    </div>
  );
};
