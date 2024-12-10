import { cn } from '@/utils/cn'
import { forwardRef, InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, errorMessage, ...rest }, ref) => {
    const border = errorMessage
      ? 'border-red-500 border-opacity-50 hover:border-opacity-75 focus:border-opacity-100'
      : 'border-black border-opacity-10 hover:border-opacity-20'

    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            `
          w-full px-5 py-4 rounded-lg 
          text-gray-700 placeholder:text-black placeholder:opacity-50 
          border`,
            border,
            className,
          )}
          {...rest}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm animate-fadeInSlide">
            {errorMessage}
          </p>
        )}
      </div>
    )
  },
)
