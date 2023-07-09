import Stripe from 'stripe';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

export async function POST(request: Request, ) {
  const req = await request.json() 
  const userSession = await getServerSession(authOptions)

  const { tripId, startDate, endDate,guests, totalPrice, name, coverImage } = req

  const session = await stripe.checkout.sessions.create({
    success_url: process.env.NEXT_HOST_URL! + '/my-trips',
    metadata: {
      name,
      coverImage,
      tripId,
      startDate,
      endDate,
      guests,
      totalPrice,
      userId: (userSession?.user as any)?.id,
    },
    line_items: [
      {
        price_data: {
          currency: 'brl',
          unit_amount: totalPrice * 100,
          product_data: {
            name,
            images: [coverImage],
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',

  })

  return new Response(JSON.stringify({ sessionId: session.id, success: true }),{
    status: 200,
  })


}