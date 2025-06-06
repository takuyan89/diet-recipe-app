'use client';
import { useState } from 'react';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <div className='flex items-center justify-center  p-10 w-full bg-gray-100 space-x-3'>
      <SearchInput value={keyword} handler={setKeyword} />
      <SearchButton keyword={keyword} />
    </div>
  );
};
