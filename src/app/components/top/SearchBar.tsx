import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';

export const SearchBar = () => {
  return (
    <div className='flex items-center justify-center  p-10 w-full bg-gray-100 space-x-3'>
      <SearchInput />
      <SearchButton />
    </div>
  );
};
