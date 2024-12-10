import { cn } from '@/utils/cn'
import { CircleNotch } from '@phosphor-icons/react'
import { ButtonHTMLAttributes } from 'react'

type ButtonSize = 'lg' | 'sm'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  size?: ButtonSize
  isLoading?: boolean
}
export function Button({
  className,
  children,
  isLoading,
  disabled,
  size = 'lg',
  ...rest
}: ButtonProps) {
  const isDisabled = isLoading || disabled

  const sizeClassName: Record<ButtonSize, string> = {
    lg: 'py-4 px-6 text-3xl rounded-xl',
    sm: 'py-2 px-3 text-lg rounded-md',
  }

  return (
    <button
      className={cn(
        `
     flex gap-2 items-center text-white bg-soft-green-400 cursor-pointer hover:enabled:brightness-95 disabled:bg-gray-300 disabled:cursor-not-allowed transition
     `,
        sizeClassName[size],
        className,
      )}
      disabled={isDisabled}
      {...rest}
    >
      {children}
      {isLoading && <CircleNotch className="size-8 animate-spin" />}
    </button>
  )
}
