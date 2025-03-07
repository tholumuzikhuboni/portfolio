
import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gradient-to-br group-[.toaster]:from-white/50 group-[.toaster]:to-white/30 group-[.toaster]:backdrop-blur-md group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-white/20 group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl",
          description: "group-[.toast]:text-muted-foreground",
          success: "group-[.toast]:border-l-4 group-[.toast]:border-l-code-green",
          error: "group-[.toast]:border-l-4 group-[.toast]:border-l-code-red",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          title: "group-[.toast]:font-mono group-[.toast]:font-medium",
        },
        icons: {
          success: (
            <div className="h-5 w-5 rounded-full bg-code-green/20 flex items-center justify-center">
              <span className="text-code-green text-lg">✓</span>
            </div>
          ),
          error: (
            <div className="h-5 w-5 rounded-full bg-code-red/20 flex items-center justify-center">
              <span className="text-code-red text-lg">×</span>
            </div>
          ),
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
