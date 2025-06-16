import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t-2 border-primary/30 bg-background/90 backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3
              className="text-lg font-semibold font-mono terminal-glow"
              style={{
                background: 'linear-gradient(to right, #00ff88, #39ff14)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              donluv.sys
            </h3>
            <p className="text-sm text-muted-foreground font-mono">
              Web3 builder focused on infrastructure, DAOs, and the metaverse.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold font-mono text-primary terminal-glow">
              PROJECTS.dir
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              <li>
                <Link
                  to="/projects/pizzadao"
                  className="hover:text-primary transition-colors terminal-glow"
                >
                  {'>'} pizzadao_module
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/frogland"
                  className="hover:text-primary transition-colors terminal-glow"
                >
                  {'>'} frogland_module
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/bittrees"
                  className="hover:text-primary transition-colors terminal-glow"
                >
                  {'>'} bittrees_module
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold font-mono text-primary terminal-glow">
              NAVIGATION.sys
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              <li>
                <Link to="/" className="hover:text-primary transition-colors terminal-glow">
                  {'>'} home.exe
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors terminal-glow">
                  {'>'} projects.dir
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors terminal-glow">
                  {'>'} about.txt
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold font-mono text-primary terminal-glow">
              CONNECT.net
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              <li>
                <a
                  href="https://github.com/donluv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors terminal-glow"
                >
                  {'>'} github.com/donluv
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/donluv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors terminal-glow"
                >
                  {'>'} x.com/donluv
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/donluv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors terminal-glow"
                >
                  {'>'} discord.gg/donluv
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-primary/20 text-center text-sm text-muted-foreground font-mono">
          <p className="terminal-glow">
            © {new Date().getFullYear()} DONLUV_SYSTEM // Built with React + TypeScript + Web3 + 💚
          </p>
        </div>
      </div>
    </footer>
  )
}
