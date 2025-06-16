import { createFileRoute } from '@tanstack/react-router'
import { Terminal } from '../components/Terminal'
import { CircuitBoard } from '../components/CircuitBoard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
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
            Web3 builder focused on infrastructure, DAOs, and the metaverse. Explore my projects
            using the terminal or circuit board below.
          </p>
        </div>

        {/* Interactive Project Explorer */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Terminal />
          <CircuitBoard />
        </div>

        {/* Traditional Project Cards (Fallback/Alternative) */}
        <div className="pt-8">
          <h2 className="text-2xl font-bold text-center mb-8">Or browse traditionally</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <a
                    href="/projects/pizzadao"
                    className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>

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
                  <a
                    href="/projects/frogland"
                    className="text-sm font-medium text-green-600 dark:text-green-400 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>

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
                  <a
                    href="/projects/bittrees"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
