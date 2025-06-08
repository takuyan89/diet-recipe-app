import { Recipe } from '@/generated/prisma';

export default function BasicInfo({ data }: { data?: Recipe }) {
  return (
    <div className='flex items-center justify-center h-full w-full  bg-gray-200'>
      <div>
        <h1>{data?.title}</h1>
        <p>説明：{data?.description}</p>
        <p>{data?.calories}kcal</p>
      </div>
    </div>
  );
}
