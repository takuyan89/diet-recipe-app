import { RecipeList } from '../recipe/RecipeList';

type Props = {
  keyword?: string;
  category?: string;
};
export const RecipeContainer = ({ keyword, category }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <RecipeList keyword={keyword} category={category} />
    </div>
  );
};
