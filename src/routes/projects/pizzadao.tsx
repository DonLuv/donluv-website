import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/pizzadao')({
  component: PizzaDAOProject,
})

function PizzaDAOProject() {
  return (
    <div className="min-h-screen pcb-traces">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 cut-corner border-2 border-primary flex items-center justify-center glow-border bg-primary/20 text-primary">
              <span className="text-4xl">🍕</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight font-mono terminal-glow text-primary">
                PIZZADAO_MODULE
              </h1>
              <p className="text-xl text-muted-foreground font-mono">ROLE: Early_Contributor</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="cut-corner-lg border-2 border-primary/50 bg-card/90 backdrop-blur p-8 glow-border text-primary">
              <h2 className="text-2xl font-bold mb-4 text-primary font-mono terminal-glow">
                SYSTEM_OVERVIEW.txt
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-mono">
                As an early contributor to PizzaDAO, I participated in the pizza revolution through
                various capacities including code contributions, community building, and strategic
                development protocols.
              </p>
            </div>

            <div className="cut-corner-lg border-2 border-primary/50 bg-card/90 backdrop-blur p-8 glow-border text-primary">
              <h2 className="text-2xl font-bold mb-6 text-primary font-mono terminal-glow">
                CONTRIBUTION_LOG.dat
              </h2>
              <div className="space-y-4 font-mono">
                <div className="flex items-start gap-4">
                  <span className="text-primary terminal-glow">{'>'}</span>
                  <div>
                    <strong className="text-primary">Smart_Contract_Development:</strong>
                    <span className="text-muted-foreground ml-2">
                      Contributed to core DAO functionality modules
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary terminal-glow">{'>'}</span>
                  <div>
                    <strong className="text-primary">Community_Building:</strong>
                    <span className="text-muted-foreground ml-2">
                      Helped establish governance processes and protocols
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary terminal-glow">{'>'}</span>
                  <div>
                    <strong className="text-primary">Technical_Architecture:</strong>
                    <span className="text-muted-foreground ml-2">
                      Participated in protocol design decisions
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-primary terminal-glow">{'>'}</span>
                  <div>
                    <strong className="text-primary">Code_Reviews:</strong>
                    <span className="text-muted-foreground ml-2">
                      Ensured quality and security of implementations
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cut-corner-lg border-2 border-primary/50 bg-card/90 backdrop-blur p-8 glow-border text-primary">
              <h2 className="text-2xl font-bold mb-6 text-primary font-mono terminal-glow">
                TECH_STACK.cfg
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Solidity', 'React', 'Web3.js', 'IPFS', 'Governance', 'TypeScript'].map(tech => (
                  <div
                    key={tech}
                    className="cut-corner-sm bg-primary/10 border border-primary px-4 py-3 text-center font-mono terminal-glow text-primary"
                  >
                    {tech.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            <div className="cut-corner-lg border-2 border-primary/50 bg-card/90 backdrop-blur p-8 glow-border text-primary">
              <h2 className="text-2xl font-bold mb-6 text-primary font-mono terminal-glow">
                IMPACT_ANALYSIS.log
              </h2>
              <p className="text-muted-foreground font-mono leading-relaxed">
                PizzaDAO represents a pioneering experiment in decentralized autonomous
                organizations focused on real-world utility. My contributions helped establish
                sustainable governance mechanisms and technical infrastructure that continues to
                serve the community.
              </p>
            </div>

            <div className="cut-corner border-2 border-accent/50 bg-accent/5 backdrop-blur p-6 glow-border text-accent">
              <h3 className="text-lg font-semibold text-accent mb-3 font-mono terminal-glow">
                🚧 MODULE_STATUS.sys
              </h3>
              <p className="text-accent/80 font-mono">
                This project module showcases early involvement in DAO governance and smart contract
                development. Connect your wallet to explore exclusive contributor content and access
                restricted documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
