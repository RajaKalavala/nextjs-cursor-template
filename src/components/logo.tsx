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
    lg: 'h-12',
  }

  return (
    <div className={cn('flex items-center', className)}>
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
