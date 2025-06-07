'use client';
import { useState } from 'react';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/recipe?query=${keyword}`);
  };

  return (
    <div className='flex items-center justify-center p-10 w-full space-x-3'>
      <SearchInput value={keyword} handler={setKeyword} onEnter={handleSearch} />
      <SearchButton keyword={keyword} />
    </div>
  );
};
