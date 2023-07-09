import {prisma} from '@/lib/prisma/prisma'
import { NextResponse } from 'next/server'

type UserParams = {
  params: {
    userId: string
  }
}

export async function GET(request: Request, { params: { userId } }: UserParams) {
  if (!userId) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: 'Usuário não encontrado',
      tripReservations: [],
    }), {
      status: 404,
    })
  }

  try {
    const reservations = await prisma.tripReservation.findMany({
      where: {
        userId,
      },
      include: {
        trip: true,
      }
    })
    return new NextResponse(JSON.stringify({
      success: true,
      tripReservations: reservations,
      message: 'Viagens reservadas encontradas'
    }), {
      status: 200,
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: 'Erro ao buscar viagens reservadas',
      tripReservations: [],
    }), {
      status: 500,
    })
  }

  
}