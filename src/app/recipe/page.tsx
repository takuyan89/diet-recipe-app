import { RecipeContainer } from '../components/recipe/RecipeContainer';

export default function RecipePage() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gray-200 p-4'>
      <RecipeContainer />
    </div>
  );
}
