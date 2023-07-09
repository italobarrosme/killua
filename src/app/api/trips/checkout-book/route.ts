import { prisma } from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req = await request.json();

  const { startDate, endDate, tripId, totalPrice, userId, guests } = req;

  console.log(req, 'REQUEST');

  try {
    const trip = await prisma.trip.findUnique({
      where: {
        id: tripId,
      },
    });

    if (!trip) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Viagem não encontrada",
        }),
        {
          status: 404,
        }
      );
    }

    const existingReservation = await prisma.tripReservation.findFirst({
      where: {
        tripId,
        userId,
        startDate: new Date(startDate),
        endDate: new Date(endDate), 
      },
    });

    if (existingReservation) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Já existe uma reserva para esta viagem",
        }),
        {
          status: 400,
        }
      );
    }

    const reservation = await prisma.tripReservation.create({
      data: {
        guests,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        totalPaid: totalPrice,
        tripId,
        userId,
      },
    });

    console.log(reservation, "RES");

    return new NextResponse(
      JSON.stringify({
        success: true,
        trip: trip,
        message: "Reserva criada com sucesso",
      }),
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Erro ao criar reserva",
      }),
      {
        status: 500,
      }
    );
  }
}
