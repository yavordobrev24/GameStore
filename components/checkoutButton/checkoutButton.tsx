"use client"
import { useStore } from "@/app/store"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CheckoutButton() {
  const clearCart = useStore((store) => store.clearCart)
  const storedGames = useStore((store) => store.cart)
  const [showModal, setShowModal] = useState(false)
   const router = useRouter()

  return (
    <>
      {storedGames.length > 0 && (
        <button
          className="button mt-10"
          onClick={() => {
            setShowModal(true)
            clearCart()
          }}
        >
          Checkout
        </button>
      )}
      {showModal ? (
        <div className="fixed content-center z-[9999] top-0 left-0 right-0 w-[100vw] h-[100vh] overflow-auto bg-black/50 ">
          <div className="bg-white text-black w-fit mx-auto p-[1rem] rounded-lg">
            <p className="text-xl mb-[1rem]">Thank you for your purchase</p>
            <button onClick={() => {setShowModal(false)
              router.push("/")
            }} className="button text-sm">Close</button>
          </div>
        </div>
      ) : null}
    </>
  )
}
