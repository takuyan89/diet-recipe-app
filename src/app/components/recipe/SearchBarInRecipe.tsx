import { useState } from 'react';
import { SearchButton } from '../top/SearchButton';
import { SearchInput } from '../top/SearchInput';
import { useRouter } from 'next/navigation';

export const SearchBarInRecipe = ({ keyword }: { keyword?: string }) => {
  const [input, setInput] = useState(keyword || '');
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = input.trim();
    if (trimmed) {
      router.push(`/recipe?query=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div className='flex items-center justify-end  p-10 w-full bg-gray-100 space-x-3'>
      <SearchInput value={input} handler={setInput} onEnter={handleSearch} />
      <SearchButton keyword={input} />
    </div>
  );
};
