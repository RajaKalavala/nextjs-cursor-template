'use client'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
             {/* Robot Icon */}
       <div className={cn('relative', sizeClasses[size])}>
         <svg
           viewBox="0 0 40 40"
           className="w-full h-full"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           {/* Robot head */}
           <rect
             x="8"
             y="10"
             width="24"
             height="20"
             rx="4"
             className="stroke-current"
             strokeWidth="2"
             fill="none"
           />
           
           {/* Robot eyes */}
           <circle
             cx="16"
             cy="18"
             r="2"
             className="fill-current"
           />
           <circle
             cx="24"
             cy="18"
             r="2"
             className="fill-current"
           />
           
           {/* Robot mouth */}
           <rect
             x="18"
             y="24"
             width="4"
             height="2"
             rx="1"
             className="fill-current"
           />
           
           {/* Robot antenna */}
           <line
             x1="20"
             y1="10"
             x2="20"
             y2="6"
             className="stroke-current"
             strokeWidth="2"
           />
           <circle
             cx="20"
             cy="6"
             r="1.5"
             className="fill-current"
           />
           
           {/* Robot body connection */}
           <rect
             x="18"
             y="30"
             width="4"
             height="2"
             className="fill-current"
           />
           
           {/* Circuit pattern on head */}
           <path
             d="M12 14 L16 14 M28 14 L24 14"
             className="stroke-current"
             strokeWidth="1"
             strokeLinecap="round"
           />
           <path
             d="M12 26 L16 26 M28 26 L24 26"
             className="stroke-current"
             strokeWidth="1"
             strokeLinecap="round"
           />
         </svg>
       </div>
      
      {/* Text */}
      <div className="flex items-center">
        <span className="font-bold text-lg tracking-wide bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
          BOTIKSHA
        </span>
        <span className="font-bold text-lg tracking-wide text-foreground ml-1">
          AI
        </span>
      </div>
    </div>
  )
}
