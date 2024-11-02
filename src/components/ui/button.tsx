import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide ",

  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-100 border-slate-600 border-2 border-b-[4px] active:border-b-2 hover:bg-slate-700 text-slate-300",
        primary: "bg-black text-slate-200 hover:bg-black/90 border-slate-700 border-b-4 active:border-b-0",
        primaryOutline: "bg-transparent text-black border-black hover:bg-slate-200",
        secondary: "bg-slate-700 text-slate-200 hover:bg-slate-600/90 border-slate-800 border-b-4 active:border-b-0",
        secondaryOutline: "bg-transparent text-slate-500 hover:bg-slate-200",
        danger: "bg-slate-900 text-slate-300 hover:bg-slate-800/90 border-slate-700 border-b-4 active:border-b-0",
        dangerOutline: "bg-transparent text-slate-500 hover:bg-slate-200",
        super: "bg-slate-900 text-slate-200 hover:bg-slate-800/90 border-slate-700 border-b-4 active:border-b-0",
        superOutline: "bg-transparent text-slate-600 hover:bg-slate-200",
        ghost: "bg-transparent text-slate-400 border-transparent hover:bg-slate-200",
        sidebar: "bg-transparent text-slate-500",
        sidebarOutline: "text-slate-600 bg-slate-600/10 border-slate-400 border-2 hover:bg-slate-200 transition-none"
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9  px-3",
        lg: "h-12  px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

