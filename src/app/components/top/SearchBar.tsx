'use client';
import { useState } from 'react';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = keyword.trim();
    if (trimmed) {
      router.push(`/recipe?query=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div className='flex items-center justify-center  p-10 w-full bg-gray-100 space-x-3'>
      <SearchInput value={keyword} handler={setKeyword} onEnter={handleSearch} />
      <SearchButton keyword={keyword} />
    </div>
  );
};
