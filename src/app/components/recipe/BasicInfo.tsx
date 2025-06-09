import { useState } from 'react';
import { Recipe } from '@/generated/prisma';

export default function BasicInfo({ recipe }: { recipe?: Recipe }) {
  const [amount, setAmount] = useState(100);

  const caloriesPerGram = recipe?.amount && recipe?.calories ? recipe.calories / recipe.amount : 0;

  const displayCalories = Math.round(caloriesPerGram * amount);

  return (
    <div className='flex flex-col items-center justify-center h-full w-full p-5 space-y-5'>
      <h1 className='text-5xl font-bold'>{recipe?.title}</h1>
      <div className='flex flex-col md:flex-row md:items-start md:justify-start space-x-10 space-y-5 md:space-y-0'>
        {recipe?.imageUrl && (
          <img src={recipe.imageUrl} alt='recipePic' className='w-80 h-80 object-cover rounded-lg shadow-md' />
        )}
        <div className='space-y-3 flex flex-col text-2xl'>
          <p>説明：{recipe?.description}</p>
          <div className='flex items-center space-x-2'>
            <p>カロリー：</p>
            <p>{displayCalories}kcal</p>
          </div>
          <div className='flex items-center space-x-2'>
            <button
              className={`px-3 py-1 rounded ${
                amount === 100 ? 'bg-yellow-300' : 'bg-gray-200'
              } hover:bg-yellow-500 cursor-pointer`}
              onClick={() => setAmount(100)}
            >
              100g
            </button>
            <button
              className={`px-3 py-1 rounded ${
                amount === 200 ? 'bg-yellow-300' : 'bg-gray-200'
              } hover:bg-yellow-500 cursor-pointer`}
              onClick={() => setAmount(200)}
            >
              200g
            </button>
            <button
              className={`px-3 py-1 rounded ${
                amount === 300 ? 'bg-yellow-300' : 'bg-gray-200'
              } hover:bg-yellow-500 cursor-pointer`}
              onClick={() => setAmount(300)}
            >
              300g
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
