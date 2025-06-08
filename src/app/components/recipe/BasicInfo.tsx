import { Recipe } from '@/generated/prisma';

export default function BasicInfo({ recipe }: { recipe?: Recipe }) {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full p-5 space-y-5'>
      <h1 className='text-5xl font-bold'>{recipe?.title}</h1>
      <div className='flex  flex-col md:flex-row md:items-start md:justify-start space-x-10 space-y-5 md:space-y-0 '>
        {recipe?.imageUrl && (
          <img src={recipe.imageUrl} alt='recipePic' className='w-80 h-80 object-cover rounded-lg shadow-md' />
        )}
        <div className='space-y-3 flex flex-col text-2xl'>
          <p>説明：{recipe?.description}</p>
          <p>{recipe?.calories}kcal</p>
        </div>
      </div>
    </div>
  );
}
