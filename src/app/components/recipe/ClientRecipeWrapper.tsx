'use client';

import { SearchBarInRecipe } from './SearchBarInRecipe';
import { RecipeContainer } from './RecipeContainer';
import { ClientRecipeWrapperProps } from '@/types/top/types';

export const ClientRecipeWrapper = ({ keyword, category }: ClientRecipeWrapperProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-[#FAFAF5]'>
      <SearchBarInRecipe keyword={keyword} />
      <RecipeContainer keyword={keyword} category={category} />
    </div>
  );
};
