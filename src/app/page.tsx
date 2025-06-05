import { CategoryContainer } from './components/top/CategoryContainer';
import { RecipeContainer } from './components/top/RecipeContainer';
import { SearchBar } from './components/top/SearchBar';

export default function TopPage() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      <SearchBar />
      <RecipeContainer />
      <CategoryContainer />
    </div>
  );
}
