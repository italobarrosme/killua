import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/prisma';


export async function GET() {
  const trips = await prisma.trip.findMany()

  if (!trips) {
    return new NextResponse(JSON.stringify({ message: 'No trips found' }), {
      status: 500,
    })
  }

  return new NextResponse(JSON.stringify(trips), {
    status: 200,
  })
}