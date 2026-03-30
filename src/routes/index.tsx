import { createFileRoute } from '@tanstack/react-router'
import { Terminal } from '../components/Terminal'
import { CircuitBoard } from '../components/CircuitBoard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen pcb-traces">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl terminal-glow">
              Hey, I'm{' '}
              <span
                className="terminal-glow"
                style={{
                  background: 'linear-gradient(to right, #00ff88, #39ff14)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                donluv
              </span>
            </h1>
            <p className="text-xl leading-8 text-muted-foreground max-w-2xl mx-auto">
              Web3 builder focused on infrastructure, DAOs, and the metaverse. Explore my projects
              using the terminal or circuit board below.
            </p>
          </div>
          <h2 className="text-2xl font-bold text-center mb-8 terminal-glow">
            Authenticate as Zero Cool
          </h2>
          {/* Interactive Project Explorer */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Terminal />
            <CircuitBoard />
          </div>

          {/* Traditional Project Cards (Fallback/Alternative) */}
          <div className="pt-8">
            <h2 className="text-2xl font-bold text-center mb-8 terminal-glow">
              Or Brute Force Access via Crash Override
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group cut-corner border-2 border-primary/50 bg-card pcb-hover glow-border text-primary">
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary cut-corner-sm flex items-center justify-center text-primary">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary terminal-glow">PizzaDAO</h3>
                  <p className="text-muted-foreground">
                    Early contributor - code, community, and various capacities in the pizza
                    revolution
                  </p>
                  <div className="pt-2">
                    <a
                      href="/projects/pizzadao"
                      className="text-sm font-medium text-accent hover:text-primary transition-colors terminal-glow"
                    >
                      INITIALIZE_PROJECT →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group cut-corner border-2 border-primary/50 bg-card pcb-hover glow-border text-primary">
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary cut-corner-sm flex items-center justify-center text-primary">
                    <span className="text-2xl">🐸</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary terminal-glow">Frogland</h3>
                  <p className="text-muted-foreground">
                    Co-founder of this metaverse NFT gaming project. Mostly focused on the technical
                    implementation
                  </p>
                  <div className="pt-2">
                    <a
                      href="/projects/frogland"
                      className="text-sm font-medium text-accent hover:text-primary transition-colors terminal-glow"
                    >
                      INITIALIZE_PROJECT →
                    </a>
                  </div>
                </div>
              </div>

              <div className="group cut-corner border-2 border-primary/50 bg-card pcb-hover glow-border text-primary">
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 bg-primary/20 border border-primary cut-corner-sm flex items-center justify-center text-primary">
                    <span className="text-2xl">🌳</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary terminal-glow">Bittrees</h3>
                  <p className="text-muted-foreground">
                    Contributor building core multichain contracts with Gnosis Safe and create2
                    factory patterns
                  </p>
                  <div className="pt-2">
                    <a
                      href="/projects/bittrees"
                      className="text-sm font-medium text-accent hover:text-primary transition-colors terminal-glow"
                    >
                      INITIALIZE_PROJECT →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
