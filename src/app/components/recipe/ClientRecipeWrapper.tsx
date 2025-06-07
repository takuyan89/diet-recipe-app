'use client';

import { SearchBarInRecipe } from './SearchBarInRecipe';
import { RecipeContainer } from './RecipeContainer';

export const ClientRecipeWrapper = ({ keyword, category }: { keyword?: string; category?: string }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <SearchBarInRecipe keyword={keyword} />
      <RecipeContainer keyword={keyword} category={category} />
    </div>
  );
};
