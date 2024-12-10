import { cn } from '@/utils/cn'
import { forwardRef, TextareaHTMLAttributes } from 'react'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorMessage?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, errorMessage, ...rest }, ref) => {
    const border = errorMessage
      ? 'border-red-500 border-opacity-50 hover:border-opacity-75 focus:border-opacity-100'
      : 'border-black border-opacity-10 hover:border-opacity-20'

    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            `
            resize-none
            max-h-24
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
