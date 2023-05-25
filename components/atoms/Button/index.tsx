import useMobileDeviceDetection from 'hooks/useMobileDetection'
import React, { forwardRef, MouseEventHandler } from 'react'
interface ButtonProps {
  value: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: 'normal' | 'small'
  style?: 'light' | 'outline' | 'solid'
  color?: 'white' | 'primary' | 'lightBrown'
  radius?: 'pill' | 'rounded'
}

const Button = forwardRef(
  (
    {
      value,
      onClick = () => {},
      size = 'normal',
      style = 'solid',
      color = 'primary',
      radius = 'rounded',
    }: ButtonProps,
    ref: React.LegacyRef<HTMLButtonElement>
  ) => {
    const isMobile = useMobileDeviceDetection()
    const getSizeStyles = (): string => {
      switch (size) {
        case 'normal':
          return 'px-14 py-4 text-base font-semibold'
        case 'small':
          return 'px-8 py-2.5 text-sm font-medium'
      }
    }
    const getStyleStyles = (): string => {
      console.log("style is", style);
      
      switch (style) {
        case 'light':
          switch (color) {
            case 'primary':
              return 'bg-primaryLight text-white hover:brightness-90'
            case 'white':
              return 'bg-buttonLight text-white hover:brightness-90'
            case 'lightBrown':
              return 'bg-buttonLight text-lightBrown hover:brightness-90'
            // default:
            //   return '';
          }
        case 'outline':
          switch (color) {
            case 'primary':
              return 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white'
            case 'white':
              return 'bg-transparent text-white border border-white hover:bg-white hover:text-dark'
            default:
              return '';
          }
        case 'solid':
          switch (color) {
            case 'primary':
              return 'bg-primary text-white hover:brightness-90'
            case 'white':
              return 'bg-white text-dark hover:brightness-90'
            case 'lightBrown':
              return 'bg-primary text-lightBrown hover:brightness-90'
          }
      }
    }
    const getRadiusStyles = (): string => {
      switch (radius) {
        case 'rounded':
          return 'rounded'
        case 'pill':
          return 'rounded-full'
      }
    }
    console.log("button value is", value);
    
    return (
        <button
          className={`${getSizeStyles()} ${getStyleStyles()} ${getRadiusStyles()} transition-all select-none ${
            isMobile ? 'cursor-default' : 'cursor-pointer'
          }`}
          onClick={onClick}
          ref={ref}
        >
          {value}
        </button>
    )
  }
)
Button.displayName = 'Button'
export default Button
export type { ButtonProps }
