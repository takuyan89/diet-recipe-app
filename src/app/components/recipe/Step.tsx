import { Step as StepType } from '@/generated/prisma';

type Props = {
  data?: StepType[];
};
export default function Step({ data }: Props) {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      <h1>作り方</h1>
      <ul>
        {data?.map((step) => {
          return (
            <li key={step.id}>
              {step.order}: {step.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
