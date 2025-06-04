export const CategoryCard = ({ data }: { data: any[] }) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
      {data.map((category: any) => (
        <div key={category.id} className='p-4 border rounded shadow w-72 h-20 flex justify-center items-center'>
          <h1 className='text-xl font-bold'>{category.name}</h1>
        </div>
      ))}
    </div>
  );
};
