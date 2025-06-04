import BasicInfo from '@/app/components/recipe/BasicInfo';
import Ingredient from '@/app/components/recipe/Ingredient';
import Step from '@/app/components/recipe/Step';

export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  //ここでfetch
  const { id } = params;
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      <BasicInfo />
      <div className='flex'>
        <Ingredient />
        <Step />
      </div>
    </div>
  );
}
