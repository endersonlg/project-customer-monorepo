import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'
import { XCircle } from '@phosphor-icons/react'
import { Button } from './button'

type FailedModal = {
  title: string
  description: string
  closeModal: () => void
}

export function FailedModal({ title, description, closeModal }: FailedModal) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Garante que o modal só renderiza no cliente
  }, [])

  if (!isClient) {
    return null // Não renderiza nada no servidor
  }

  return createPortal(
    <div suppressHydrationWarning>
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={closeModal}
      ></div>
      <div className="absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md max-w-sm shadow-sm shadow-white animate-fadeInSlide overflow-hidden">
        <div className="pt-8 px-6 flex flex-col items-center mb-6">
          <XCircle className="size-20 text-red-500" />
          <h4 className="text-2xl font-bold text-center text-gray-750 mb-2">
            {title}
          </h4>
          <p className="text-base text-center text-gray-700">{description}</p>
        </div>
        <div className="w-full border-t border-gray-300 px-4 py-4 bg-gray-100">
          <Button onClick={closeModal} size="sm" className="ml-auto">
            Back
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
