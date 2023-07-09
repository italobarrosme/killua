import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type useRedirectUserProps = {
  redirectUnauthorizedTo?: string
  redirectAuthorizedTo?: string
  status: "loading" | "authenticated" | "unauthenticated"
  session: any
}

export const useRedirectUser = ({
  redirectUnauthorizedTo,
  redirectAuthorizedTo,
  status,
  session,
}:useRedirectUserProps) => {
  const [message, setMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return
    if (status === "authenticated" && session && redirectAuthorizedTo) {
      setMessage("")
      router.push(redirectAuthorizedTo)
    }
    if (status === "unauthenticated" && !session && redirectUnauthorizedTo) {
      setMessage("Você precisa estar logado para acessar essa página.")
      router.push(redirectUnauthorizedTo)

    }
    
  }, [status, session, redirectUnauthorizedTo, redirectAuthorizedTo, router])

  return {
    status,
    session,
    message
  }

}