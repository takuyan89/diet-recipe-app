import { SearchBar } from '../top/SearchBar';
import RecipeList2 from './RecipeList2';

export const RecipeContainer2 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <SearchBar />
      <RecipeList2 />
    </div>
  );
};
