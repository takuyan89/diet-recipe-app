import { getCategories } from '@/app/features/api/category/getCategory';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  return await getCategories(request);
}
