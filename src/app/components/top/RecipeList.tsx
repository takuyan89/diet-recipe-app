import { RecipeCard } from './RecipeCard';

//ここデータをフェッチする

const fakeRecipes = [
  { id: 1, title: 'Recipe 1', description: 'Description for Recipe 1' },
  { id: 2, title: 'Recipe 2', description: 'Description for Recipe 2' },
  { id: 3, title: 'Recipe 3', description: 'Description for Recipe 3' },
  { id: 4, title: 'Recipe 4', description: 'Description for Recipe 4' },
  { id: 5, title: 'Recipe 5', description: 'Description for Recipe 5' },
  { id: 6, title: 'Recipe 6', description: 'Description for Recipe 6' },
];

export const RecipeList = () => {
  return (
    <>
      <RecipeCard data={fakeRecipes} />
    </>
  );
};
