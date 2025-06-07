import { PrismaClient } from '@/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';

type ingredientType = {
  name: string;
  quantity: string;
};

type stepType = {
  content: string;
  order: number;
};

export const createRecipe = async (request: NextRequest) => {
  const prisma = new PrismaClient();
  try {
    const data = await request.json();

    const { recipe, ingredients, steps } = data;

    if (!recipe.title) {
      return NextResponse.json({ error: 'Recipe title is required' }, { status: 400 });
    }
    if (!recipe.description) {
      return NextResponse.json({ error: 'Description is required' }, { status: 400 });
    }
    if (!recipe.calories) {
      return NextResponse.json({ error: 'Calories is required' }, { status: 400 });
    }

    const createdRecipe = await prisma.recipe.create({
      data: {
        title: recipe.title,
        description: recipe.description,
        calories: recipe.calories,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    const ingredientData = ingredients.map((ingredient: ingredientType) => ({
      ...ingredient,
      recipeId: createdRecipe.id,
    }));
    const stepData = steps.map((step: stepType) => ({
      ...step,
      recipeId: createdRecipe.id,
    }));
    await prisma.ingredient.createMany({
      data: ingredientData,
    });
    await prisma.step.createMany({
      data: stepData,
    });

    return NextResponse.json(createdRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    return NextResponse.json({ error: 'Failed to create recipe' }, { status: 500 });
  }
};
