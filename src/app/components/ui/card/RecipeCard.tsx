import { Recipe } from '@/generated/prisma';
import Link from 'next/link';

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`} key={recipe.id} className='no-underline'>
      <div className='p-4 border rounded shadow w-72 h-52 flex items-end'>
        <h2 className='text-xl font-bold'>{recipe.title}</h2>
      </div>
    </Link>
  );
};
