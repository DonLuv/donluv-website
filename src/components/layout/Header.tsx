import { Link } from '@tanstack/react-router'
import { WalletConnect } from '../WalletConnect'

export function Header() {
  return (
    <header className="border-b-2 border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-2xl font-bold font-mono terminal-glow"
              style={{
                background: 'linear-gradient(to right, #00ff88, #39ff14)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              donluv.sys
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium font-mono transition-colors hover:text-primary [&.active]:text-primary terminal-glow"
              activeProps={{ className: 'text-primary' }}
              activeOptions={{ exact: true }}
            >
              HOME.exe
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium font-mono transition-colors hover:text-primary [&.active]:text-primary terminal-glow"
              activeProps={{ className: 'text-primary' }}
            >
              PROJECTS.dir
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium font-mono transition-colors hover:text-primary [&.active]:text-primary terminal-glow"
              activeProps={{ className: 'text-primary' }}
            >
              ABOUT.txt
            </Link>
          </nav>

          {/* Wallet Connection */}
          <div className="flex items-center">
            <WalletConnect />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4 border-t border-primary/20 mt-4 pt-4">
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-sm font-medium font-mono transition-colors hover:text-primary [&.active]:text-primary terminal-glow"
              activeProps={{ className: 'text-primary' }}
              activeOptions={{ exact: true }}
            >
              HOME.exe
            </Link>
            <Link
              to="/projects"
              className="text-sm font-medium font-mono transition-colors hover:text-primary [&.active]:text-primary terminal-glow"
              activeProps={{ className: 'text-primary' }}
            >
              PROJECTS.dir
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium font-mono transition-colors hover:text-primary [&.active]:text-primary terminal-glow"
              activeProps={{ className: 'text-primary' }}
            >
              ABOUT.txt
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
