"use client"

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data } = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className='gap-4 flex'>
        <button onClick={() => signIn()}>
          Login
        </button>
        <button onClick={() => signOut()}>
          Logout
        </button>

        hello {data?.user?.name ?? 'world'}
      </div>
    </main>
  )
}
