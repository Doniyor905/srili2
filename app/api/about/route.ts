import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const about = await prisma.about.findMany();
  return NextResponse.json(about);
}
