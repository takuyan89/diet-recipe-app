import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const createRecipeCategory = async (request: NextRequest, recipeId: string) => {
  const prisma = new PrismaClient();
  try {
    const data = await request.json();

    const { categoryId } = data;

    if (!categoryId) {
      return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    const createdRecipe = await prisma.recipeCategory.create({
      data: {
        recipeId: recipeId,
        categoryId: categoryId,
      },
    });

    return NextResponse.json(createdRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    return NextResponse.json({ error: 'Failed to create recipe' }, { status: 500 });
  }
};
