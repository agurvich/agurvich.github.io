import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({
      className,
      value,
      indicatorColor,
      value2,
      indicatorColor2,
      value3,
      indicatorColor3,
      ...props
  },
  ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-fill-neutral outline outline-stroke-contrast-weak", className)}
    {...props}>
    { value3 && 
      <ProgressPrimitive.Indicator
        className={`absolute h-full top-0 left-0 w-full flex-1 ${indicatorColor3 || 'bg-contrast'} transition-all`}
        style={{ transform: `translateX(-${100 - (value3+value2+value || 0)}%)` }} />
    }
    { value2 && 
      <ProgressPrimitive.Indicator
        className={`absolute h-full top-0 left-0 w-full flex-1 ${indicatorColor2 || 'bg-contrast'} transition-all`}
        style={{ transform: `translateX(-${100 - (value2+value || 0)}%)` }} />
    }
    <ProgressPrimitive.Indicator
      className={`absolute top-0 left-0 h-full w-full flex-1 ${indicatorColor || 'bg-contrast'} transition-all`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
