import { Recipe } from '@/generated/prisma';
import Link from 'next/link';

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link href={`/recipe/${recipe.id}`} key={recipe.id} className='no-underline'>
      <div className='p-4 border rounded shadow w-72 h-52 flex flex-col justify-end bg-white overflow-hidden relative'>
        {recipe.imageUrl && (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className='absolute top-0 left-0 w-full h-full object-cover opacity-60'
          />
        )}
        <div className='relative z-10  p-2 rounded'>
          <h2 className='text-xl font-bold text-black'>{recipe.title}</h2>
        </div>
      </div>
    </Link>
  );
};
