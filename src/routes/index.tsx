import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Hey, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #9333ea, #db2777)',
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
            Web3 builder focused on infrastructure, DAOs, and the metaverse. Early contributor to
            PizzaDAO, co-founder of Frogland, and core dev at Bittrees.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/projects/pizzadao" className="hover:text-primary transition-colors">
            <div className="group p-8 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍕</span>
                </div>
                <h3 className="text-xl font-semibold">PizzaDAO</h3>
                <p className="text-muted-foreground">
                  Early contributor - code, community, and various capacities in the pizza
                  revolution
                </p>
                <div className="pt-2">
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Contributor →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/projects/frogland" className="hover:text-primary transition-colors">
            <div className="group p-8 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🐸</span>
                </div>
                <h3 className="text-xl font-semibold">Frogland</h3>
                <p className="text-muted-foreground">
                  Co-founder of this metaverse NFT gaming project. Mostly focused on the technical
                  implementation
                </p>
                <div className="pt-2">
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Co-founder →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/projects/bittrees" className="hover:text-primary transition-colors">
            <div className="group p-8 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌳</span>
                </div>
                <h3 className="text-xl font-semibold">Bittrees</h3>
                <p className="text-muted-foreground">
                  Contributor building core multichain contracts with Gnosis Safe and create2
                  factory patterns
                </p>
                <div className="pt-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Core Dev →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="pt-8">
          <p className="text-lg text-muted-foreground">
            Connect your wallet above to access exclusive content and interact with the projects.
          </p>
        </div>
      </div>
    </div>
  )
}
