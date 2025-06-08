import { Step as StepType } from '@/generated/prisma';

export default function Step({ data }: { data?: StepType[] }) {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full space-y-4'>
      <h1 className='font-bold text-2xl'>作り方</h1>
      <ul className='space-y-2 flex flex-col items-start'>
        {data?.map((step) => {
          return (
            <li key={step.id} className='text-lg text-gray-700 flex items-center'>
              {step.order}: {step.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
