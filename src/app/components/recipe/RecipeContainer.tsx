import { RecipeList } from '../recipe/RecipeList';

type Props = {
  keyword: string;
};
export const RecipeContainer = ({ keyword }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <RecipeList keyword={keyword} />
    </div>
  );
};
