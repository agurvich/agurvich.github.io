import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(`
  inline-flex 
  items-center 
  justify-center 
  rounded-md 
  text-sm 
  font-medium 
  transition-colors
  bg-background-contrast
  focus-visible:outline-none 
  focus-visible:ring-0 
  data-[state=on]:bg-brand 
  hover-overlay
  disabled:disabled-overlay
  `,
  {
    variants: {
      variant: {
        default: "",
        outline:
          "border border-input bg-transparent ",
        destructive: "bg-background-error text-contrast data-[state=on]:bg-error"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
