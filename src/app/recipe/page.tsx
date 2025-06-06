import { use } from 'react';
import { ClientRecipeWrapper } from '../components/recipe/ClientRecipeWrapper';

export default function RecipePage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = use(searchParams);
  const keyword = query ?? '';
  return <ClientRecipeWrapper keyword={keyword} />;
}
