import { prisma } from '@/prisma/prisma-client';
import { Category } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const rawQuery = req.nextUrl.searchParams.get('category') || '';
  const query = rawQuery.toUpperCase() as keyof typeof Category;

  if (!(query in Category)) {
    return NextResponse.json({ error: 'Category is required' }, { status: 400 });
  }

  const products = await prisma.product.findMany({
    where: {
      category: Category[query],
    },
  });

  return NextResponse.json(products);
}
