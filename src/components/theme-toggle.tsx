'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center space-x-1 rounded-lg border bg-card p-1">
      <button
        onClick={() => setTheme('light')}
        className={cn(
          'flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground',
          theme === 'light' && 'bg-accent text-accent-foreground'
        )}>
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light mode</span>
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={cn(
          'flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground',
          theme === 'dark' && 'bg-accent text-accent-foreground'
        )}>
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark mode</span>
      </button>

      <button
        onClick={() => setTheme('system')}
        className={cn(
          'flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground',
          theme === 'system' && 'bg-accent text-accent-foreground'
        )}>
        <Monitor className="h-4 w-4" />
        <span className="sr-only">System mode</span>
      </button>
    </div>
  )
}
