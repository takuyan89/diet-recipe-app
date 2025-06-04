export default function RecipeCard2({
  title,
  description,
  imageUrl,
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
}) {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{title}</div>
          <p className='text-gray-700 text-base'>{description}</p>
        </div>
      </div>
    </div>
  );
}
