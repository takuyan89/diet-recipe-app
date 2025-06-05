import { RecipeCard } from './RecipeCard';

//ここデータをフェッチする

const fakeRecipes = [
  { id: 1, title: 'Recipe 1', description: 'Description for Recipe 1' },
  { id: 2, title: 'Recipe 2', description: 'Description for Recipe 2' },
  { id: 3, title: 'Recipe 3', description: 'Description for Recipe 3' },
  { id: 4, title: 'Recipe 4', description: 'Description for Recipe 4' },
  { id: 5, title: 'Recipe 5', description: 'Description for Recipe 5' },
  { id: 6, title: 'Recipe 6', description: 'Description for Recipe 6' },
  { id: 7, title: 'Recipe 7', description: 'Description for Recipe 7' },
  { id: 8, title: 'Recipe 8', description: 'Description for Recipe 8' },
  { id: 9, title: 'Recipe 9', description: 'Description for Recipe 9' },
  { id: 10, title: 'Recipe 10', description: 'Description for Recipe 10' },
  { id: 11, title: 'Recipe 11', description: 'Description for Recipe 11' },
  { id: 12, title: 'Recipe 12', description: 'Description for Recipe 12' },
  { id: 13, title: 'Recipe 13', description: 'Description for Recipe 13' },
  { id: 14, title: 'Recipe 14', description: 'Description for Recipe 14' },
  { id: 15, title: 'Recipe 15', description: 'Description for Recipe 15' },
  { id: 16, title: 'Recipe 16', description: 'Description for Recipe 16' },
  { id: 17, title: 'Recipe 17', description: 'Description for Recipe 17' },
];

export const RecipeList = () => {
  return (
    <>
      <RecipeCard data={fakeRecipes} />
    </>
  );
};
