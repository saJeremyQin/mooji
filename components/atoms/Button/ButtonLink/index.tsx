import Button, { ButtonProps } from 'components/atoms/Button'
import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string,
  // color?:string     // Add the color prop to accept custom color values
}

const ButtonLink = ({
  href,
  value,
  onClick = () => {},
  size = 'normal',
  style = 'solid',
  color = 'primary',
  radius = 'rounded',
}: ButtonLinkProps) => {
  // const buttonColor = color.startsWith('text-')? color:`text-${color}`;
  return (
    <Link href={href} passHref>
        <Button
          value={value}
          color={color}       // Use the buttonColor variable here
          onClick={onClick}
          radius={radius}
          size={size}
          style={style}
        />
    </Link>
  )
}

export default ButtonLink
export type { ButtonLinkProps }
