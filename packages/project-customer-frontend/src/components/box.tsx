import { cn } from '@/utils/cn'
import { HTMLAttributes } from 'react'

type BoxSize = 'lg' | 'sm'

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  variant?: BoxSize
}

const sizeClassName: Record<BoxSize, string> = {
  lg: 'w-9/12 max-w-2xl py-16 px-14 shadow-lg',
  sm: 'w-full max-w-sm py-8 px-6 shadow-sm',
}

export function Box({
  children,
  className,
  variant = 'lg',
  ...rest
}: BoxProps) {
  return (
    <div
      className={cn(
        `flex flex-col items-center bg-soft-green-100 rounded-3xl shadow-gray-40 max-w-sm`,
        sizeClassName[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
