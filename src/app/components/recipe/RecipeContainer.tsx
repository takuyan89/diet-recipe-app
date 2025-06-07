import { RecipeContainerProps } from '@/types/top/types';
import { RecipeList } from '../recipe/RecipeList';

export const RecipeContainer = ({ keyword, category }: RecipeContainerProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  p-6'>
      <RecipeList keyword={keyword} category={category} />
    </div>
  );
};
