import { createRecipeCategory } from '@/app/features/api/recipe/createRecipeCategory';
import { NextRequest } from 'next/server';

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const { id } = params;
  return await createRecipeCategory(request, id);
}
