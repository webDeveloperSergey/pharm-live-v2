/* eslint-disable sort-keys */
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ButtonHTMLAttributes, FC } from 'react'

import { cn } from '$helpers/cnWrap'

const buttonVariants = cva(
  'inline-flex justify-center items-center rounded-lg font-medium transition-all',
  {
    variants: {
      variant: {
        default: 'text-white bg-primary-500 hover:bg-primary-100',
        ghost:
          'border border-primary-500 bg-transparent text-primary-500 hover:bg-primary-100 hover:text-white hover:border-primary-100',
      },
      size: {
        default: 'py-3.5 px-8',
        lg: '',
        md: '',
        sm: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    />
  )
}

export { Button, buttonVariants }
