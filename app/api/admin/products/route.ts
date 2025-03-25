import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = await prisma.product.create({
    data: {
      name_tr: body.name_tr,
      name_en: body.name_en,
      description_tr: body.description_tr,
      description_en: body.description_en,
      category: body.category,
      size: body.size,
      smellProduct_tr: body.type_tr,
      smellProduct_en: body.type_en,
      imageUrl: body.image, // временно string
    },
  });
  return NextResponse.json(newProduct, { status: 201 });
}
