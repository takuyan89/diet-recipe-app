import { PrismaClient } from '@/generated/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const prisma = new PrismaClient();
  try {
    const recipes = await prisma.recipe.findMany();

    return NextResponse.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return NextResponse.json({ error: 'Failed to fetch recipes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  try {
    const data = await request.json();

    console.log('Received data:', data);

    // Validate and transform data as needed
    // const { recipe, ingredients, steps } = data;

    // Create the recipe
    // const createdRecipe = await prisma.recipe.create({
    //   data: {
    //     ...recipe,
    //     ingredients: {
    //       create: ingredients.map((ingredient: any) => ({
    //         ...ingredient,
    //       })),
    //     },
    //     steps: {
    //       create: steps.map((step: any) => ({
    //         ...step,
    //       })),
    //     },
    //   },
    //   include: {
    //     ingredients: true,
    //     steps: true,
    //   },
    // });

    // return NextResponse.json(createdRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    return NextResponse.json({ error: 'Failed to create recipe' }, { status: 500 });
  }
}
