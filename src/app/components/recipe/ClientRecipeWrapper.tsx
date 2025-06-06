'use client';

import { useState } from 'react';
import { SearchBarInRecipe } from './SearchBarInRecipe';
import { RecipeContainer } from './RecipeContainer';

export const ClientRecipeWrapper = ({ keyword }: { keyword: string }) => {
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <SearchBarInRecipe />
      <RecipeContainer keyword={searchKeyword} />
    </div>
  );
};
