import { getRecipe } from '@/app/features/api/recipe/getRecipe';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const resolvedParams = await params;
  return await getRecipe(request, resolvedParams.id);
}
