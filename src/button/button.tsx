import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '../lib/utils'
import base from './button.module.css'

// color
import highlight from './color/highlight.module.css'
import failure from './color/failure.module.css'
import none from './color/none.module.css'
//size
import size from './size.module.css'

//style
import flat from './style/flat.module.css';
import outset from './style/outset.module.css'

const buttonVariants = cva(
  base.button,
  {
    variants: {
      variant: {
        flat: flat.main,
        outset: outset.main
      },
      size: {
        large: size.large,
        medium: size.medium,
        small: size.small,
      },
      intent: {
        highlight: "",
        failure: "",
        none: "",
      }
    },
    defaultVariants: {
      variant: "outset",
      size: "medium",
      intent: "highlight"
    },
    compoundVariants: [
      {
        variant: 'flat',
        intent: 'highlight',
        className: highlight.flat
      },
      {
        variant: 'flat',
        intent: 'failure',
        className: failure.flat
      },
      {
        variant: 'flat',
        intent: 'none',
        className: none.flat
      },
      {
        variant: 'outset',
        intent: 'highlight',
        className: highlight.outset
      },
      {
        variant: 'outset',
        intent: 'failure',
        className: failure.outset
      },
      {
        variant: 'outset',
        intent: 'none',
        className: none.outset
      },
    ]
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, intent, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, intent, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
