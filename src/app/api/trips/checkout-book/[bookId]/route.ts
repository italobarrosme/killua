import {prisma} from '@/lib/prisma/prisma'
import { NextResponse } from 'next/server'

type UserParams = {
  params: {
    bookId: string
  }
}

export async function DELETE(request: Request, { params: { bookId } }: UserParams) {

  if (!bookId) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: 'Viagem não encontrada',
    }), {
      status: 404,
    })
  }

  try {
    const tripDel = await prisma.tripReservation.delete({
      where: {
        id: bookId,
      },
    })

    return new NextResponse(JSON.stringify({
      success: true,
      tripDel,
      message: 'Viagem deletada com sucesso'
    }), {
      status: 200,
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({
      success: false,
      message: 'Erro ao deletar viagem',
    }), {
      status: 500,
    })
  }

  
}