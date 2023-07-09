import { prisma } from "@/lib/prisma/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
})

export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature')!

  const text = await request.text()


  const event = stripe.webhooks.constructEvent(text, sig, process.env.STRIPE_WEBHOOK_SECRET_KEY!)


  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any

    try {
      await prisma.tripReservation.create({
        data: {
          tripId: session.metadata.tripId,
          userId: session.metadata.userId,
          startDate: new Date(session.metadata.startDate),
          endDate: new Date(session.metadata.endDate),
          totalPaid: Number(session.metadata.totalPrice),
          guests: Number(session.metadata.guests),
        }
      })      
    } catch (error) {
      console.log(error, 'ERROR')

      return new Response(JSON.stringify({ received: false, success: false }), {
        status: 400,
      })
    }

   
    
  }

  return new Response(JSON.stringify({ received: true, success: true }), {
    status: 200,
  })

  
}