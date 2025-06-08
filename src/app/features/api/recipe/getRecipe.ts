import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const getRecipe = async (request: NextRequest, id: string) => {
  const prisma = new PrismaClient();
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id },
      include: {
        ingredients: true,
        steps: true,
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
    return NextResponse.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    return NextResponse.json({ error: 'Failed to fetch recipe' }, { status: 500 });
  }
};
