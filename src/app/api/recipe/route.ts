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
