import { use } from 'react';
import { ClientRecipeWrapper } from '../components/recipe/ClientRecipeWrapper';

export default function RecipePage({ searchParams }: { searchParams: Promise<{ query?: string; category?: string }> }) {
  const { query, category } = use(searchParams);

  return <ClientRecipeWrapper keyword={query} category={category} />;
}
