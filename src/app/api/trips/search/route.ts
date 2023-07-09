import {prisma} from '@/lib/prisma/prisma'
import { NextResponse } from 'next/server'

const generateSearchQuery = (location: string, startDate: string, budget: string) => {
  console.log(location, startDate, budget, '##################################')
  let searchQuery: any = {
    OR: [
      {
        name: {
          search: decodeURIComponent(location)
        },
        description: {
          search: decodeURIComponent(location)
        },
        location: {
          search: decodeURIComponent(location)
        }
      },
    ],
  };

  if (startDate) {
    searchQuery = {
      ...searchQuery,
      AND: [
        {
          startDate: {
            gte: new Date(startDate)
          }
        }
      ]
    };
  }

  if (budget) {
    searchQuery = {
      ...searchQuery,
      AND: [
        {
          pricePerDay: {
            lte: parseInt(budget)
          }
        }
      ]
    };
  }

  return searchQuery;
};



export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const location = searchParams.get('location') ?? ''
  const startDate = searchParams.get('startDate') ?? ''
  const budget = searchParams.get('budget') ?? ''

  try {
    const trips = await prisma.trip.findMany({
      where: {
        ...generateSearchQuery(location, startDate, budget)
      }
    })
    console.log(trips, '##################################')

    if (!trips) {
      return new NextResponse(JSON.stringify({
        success: false,
        trips: [],
        message: 'Nenhuma viagem encontrada'
      }), {
        status: 404,
      })
    }

    return new NextResponse(JSON.stringify({
      success: true,
      trips: trips,
      message: 'Viagens encontradas'
    }), {
      status: 200,
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: 'Erro ao buscar viagens',
      trips: [],
    }), {
      status: 500,
    })
  }

  
}