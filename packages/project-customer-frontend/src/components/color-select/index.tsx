import { cn } from '@/utils/cn'
import ReactSelect, {
  SingleValue,
  Props as ReactSelectProps,
} from 'react-select'

export type ColorOption = {
  label: string
  value: string
  hexa: string
}

type ColorSelectProps = ReactSelectProps<SingleValue<ColorOption>> & {
  errorMessage?: string
}

export function ColorSelect({ errorMessage, ...rest }: ColorSelectProps) {
  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  })

  const border = errorMessage
    ? 'border-red-500 border-opacity-50 hover:border-opacity-75 focus:border-opacity-100'
    : 'border-black border-opacity-10 hover:border-opacity-20'

  return (
    <div className="w-full">
      <ReactSelect
        unstyled
        instanceId={'unique-instance-id'}
        classNames={{
          container: () => cn(`w-full bg-white rounded-lg border`, border),
          control: () =>
            'px-5 py-4 w-full text-gray-700 placeholder:text-black placeholder:opacity-50',
          dropdownIndicator: () =>
            'text-gray-300 hover:text-gray-400 focus:text-gray-400',
          menu: () =>
            'bg-white mt-1 border border-black border-opacity-10 rounded-lg',
          option: () =>
            `px-5 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600 
         rounded-lg !cursor-pointer`,
          placeholder: () => 'text-black opacity-50',
          noOptionsMessage: () => 'py-2 text-gray-500',
        }}
        styles={{
          option: (styles, { data }) => {
            return {
              ...styles,
              ...dot(data!.hexa),
            }
          },
          singleValue: (styles, { data }) => ({
            ...styles,
            ...dot(data!.hexa),
          }),
        }}
        {...rest}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm animate-fadeInSlide">
          {errorMessage}
        </p>
      )}
    </div>
  )
}
