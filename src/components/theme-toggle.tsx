'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted border border-border cursor-pointer transition-colors duration-300 hover:bg-accent"
      aria-label="Toggle theme">
      {/* Sliding Circle */}
      <div
        className={cn(
          'absolute top-0.5 w-6 h-6 rounded-full bg-background border border-border shadow-sm transition-transform duration-300 ease-in-out flex items-center justify-center',
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0.5'
        )}>
        {theme === 'light' ? (
          <Sun className="h-3 w-3 text-yellow-500" />
        ) : (
          <Moon className="h-3 w-3 text-blue-500" />
        )}
      </div>

      {/* Background Icons (subtle) */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <Sun className="h-3 w-3 text-muted-foreground/30" />
        <Moon className="h-3 w-3 text-muted-foreground/30" />
      </div>
    </button>
  )
}
