import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || '';

  const product = await prisma.product.findMany({
    where: {
      OR: [
        {
          name_en: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          name_tr: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ],
    },
    take: 3,
  });

  return NextResponse.json(product);
}
