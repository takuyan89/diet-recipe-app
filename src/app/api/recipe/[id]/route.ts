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
  return await getRecipe(request, params.id);
}
