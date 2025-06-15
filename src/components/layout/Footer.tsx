import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3
              className="text-lg font-semibold"
              style={{
                background: 'linear-gradient(to right, #9333ea, #db2777)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              donluv
            </h3>
            <p className="text-sm text-muted-foreground">
              Web3 builder focused on infrastructure, DAOs, and the metaverse.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Projects</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/project/pizzadao" className="hover:text-primary transition-colors">
                  PizzaDAO
                </Link>
              </li>
              <li>
                <Link to="/project/frogland" className="hover:text-primary transition-colors">
                  Frogland
                </Link>
              </li>
              <li>
                <Link to="/project/bittrees" className="hover:text-primary transition-colors">
                  Bittrees
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://github.com/donluv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/donluv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/donluv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} donluv. Built with React, TypeScript, and Web3.</p>
        </div>
      </div>
    </footer>
  )
}
