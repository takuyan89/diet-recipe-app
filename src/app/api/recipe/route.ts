import { createRecipe } from '@/app/features/api/recipe/createRecipe';
import { getRecipes } from '@/app/features/api/recipe/getRecipe';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return await getRecipes(request);
}

export async function POST(request: NextRequest) {
  return await createRecipe(request);
}
