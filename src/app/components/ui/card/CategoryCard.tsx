import { Category } from '@/generated/prisma';
import Link from 'next/link';

export const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link href={`/recipe?category=${category.name}`} key={category.id}>
      <div key={category.id} className='p-4 border rounded shadow w-72 h-20 flex justify-center items-center'>
        <h1 className='text-xl font-bold'>{category.name}</h1>
      </div>
    </Link>
  );
};
