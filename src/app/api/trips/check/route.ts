import {prisma} from '@/lib/prisma/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const req = await request.json()

  const trip = await prisma.trip.findUnique({
    where: {
      id: req.tripId
    }
  })

  if (!trip) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: 'Viagem não encontrada'
    }), {
      status: 404,
    })
  }

  const reservations = await prisma.tripReservation.findMany({
    where: {
      tripId: req.tripId,
      // VERIFICA SE EXISTE RESERVA COM DATA DE INICIO MENOR OU IGUAL A DATA DE FIM DA RESERVA SOLICITADA
      startDate: {
        lte: new Date(req.endDate)
      },
      endDate: {
        gte: new Date(req.startDate)
      }
    }
  })

  if (reservations.length > 0) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: 'Já existe uma reserva para esse período'
    }), {
      status: 400,
    })
  }

  return new NextResponse(JSON.stringify({
    success: true,
    trip: trip
  }), {
    status: 200,
  })
}