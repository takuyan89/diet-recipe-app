import { SearchButton } from '../top/SearchButton';
import { SearchInput } from '../top/SearchInput';

export const SearchBarInRecipe = () => {
  return (
    <div className='flex items-center justify-end  p-10 w-full bg-gray-100 space-x-3'>
      <SearchInput />
      <SearchButton />
    </div>
  );
};
