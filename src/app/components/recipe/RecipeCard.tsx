export const RecipeCard = ({ data }: { data: any[] }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
      {data.map((recipe: any) => (
        <div key={recipe.id} className='p-4 border rounded shadow w-72 h-52'>
          <h2 className='text-xl font-bold'>{recipe.title}</h2>
          <p className='text-gray-600'>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
