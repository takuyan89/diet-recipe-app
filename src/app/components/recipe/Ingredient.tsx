import { Ingredient as IngredientType } from '@/generated/prisma';

export default function Ingredient({ data }: { data?: IngredientType[] }) {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full space-y-4'>
      <h1 className='font-bold text-2xl'>材料</h1>
      <ul className='space-y-2 flex flex-col items-center'>
        {data?.map((ingredient) => {
          return (
            <li key={ingredient.id} className='text-lg text-gray-700 flex items-center'>
              {ingredient.name} : {ingredient.quantity}g
            </li>
          );
        })}
      </ul>
    </div>
  );
}
