import Image from "next/image"
import { cn } from "@/lib/utils"

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
} as const

type GoioMobLogoProps = {
  size?: keyof typeof sizeClasses
  className?: string
}

export function GoioMobLogo({ size = "md", className }: GoioMobLogoProps) {
  const px = size === "sm" ? 32 : 36

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-lg bg-background/90",
        sizeClasses[size],
        className,
      )}
    >
      <Image
        src="/goio_mob_logo.webp"
        alt="Goio Mob"
        width={px}
        height={px}
        className="h-full w-full object-contain p-0.5"
      />
    </div>
  )
}
