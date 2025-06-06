import { Ingredient as IngredientType } from '@/generated/prisma';

type Props = {
  data?: IngredientType[];
};

export default function Ingredient({ data }: Props) {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      <h1>材料</h1>
      <ul>
        {data?.map((ingredient) => {
          return (
            <li key={ingredient.id}>
              {ingredient.name}:{ingredient.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
