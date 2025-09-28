import Image from "next/image"

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image src="/logo.png" alt="Chicago Logo" width={size} height={size} className="rounded-full" />
      <span className="text-xl font-bold text-foreground">Chicago Dashboard</span>
    </div>
  )
}
