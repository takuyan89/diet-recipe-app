import CategoryCard2 from '../ui/card/CategoryCard2';

const fakeLists = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    imageUrl: 'https://example.com/spaghetti-carbonara.jpg',
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    description: 'A popular Indian dish consisting of roasted marinated chicken in a spiced curry sauce.',
    imageUrl: 'https://example.com/chicken-tikka-masala.jpg',
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    description: 'A quick and healthy dish made with assorted vegetables stir-fried in a savory sauce.',
    imageUrl: 'https://example.com/vegetable-stir-fry.jpg',
  },
];

export default function CategoryList2() {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  bg-gray-200'>
      {fakeLists.map((recipe) => (
        <CategoryCard2
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          imageUrl={recipe.imageUrl}
        />
      ))}
    </div>
  );
}
