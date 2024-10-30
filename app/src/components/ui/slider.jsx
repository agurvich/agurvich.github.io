import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    <SliderPrimitive.Track
      className={`
          relative
          h-2
          w-full
          grow
          overflow-hidden
          rounded-full
          bg-fill-neutral
          outline 
          outline-stroke-contrast-weak
      `}>
      <SliderPrimitive.Range className="absolute h-full bg-success" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={`
        block
        p-[0.375em]
        h-0
        w-0
        rounded-full
        bg-success
        transition-colors
        focus-visible:outline-none
        focus-visible:ring-none
        focus-visible:scale-125
        disabled:pointer-events-none
        disabled:opacity-50
        `}
/>
  </SliderPrimitive.Root>
))
Slider.displayName = 'badslider';//SliderPrimitive.Root.displayName

export { Slider }
