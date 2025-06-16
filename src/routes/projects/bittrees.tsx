import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/bittrees')({
  component: BittreesProject,
})

function BittreesProject() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-6xl">🌳</span>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Bittrees</h1>
            <p className="text-xl text-muted-foreground">Core Developer</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            As a core developer for Bittrees, I built essential multichain infrastructure using
            Gnosis Safe and create2 factory patterns for reliable cross-chain deployment.
          </p>

          <h2>Technical Contributions</h2>
          <ul>
            <li>
              <strong>Multichain Contracts:</strong> Designed and implemented cross-chain compatible
              smart contracts
            </li>
            <li>
              <strong>Gnosis Safe Integration:</strong> Built secure multi-signature wallet
              functionality
            </li>
            <li>
              <strong>Create2 Factory Patterns:</strong> Developed deterministic contract deployment
              systems
            </li>
            <li>
              <strong>Security Auditing:</strong> Conducted thorough security reviews and testing
            </li>
          </ul>

          <h2>Key Innovations</h2>
          <ul>
            <li>Deterministic address generation across multiple blockchains</li>
            <li>Gas-optimized deployment strategies using create2</li>
            <li>Seamless Gnosis Safe integration for institutional security</li>
            <li>Automated testing frameworks for multichain scenarios</li>
          </ul>

          <h2>Technologies Used</h2>
          <div className="flex flex-wrap gap-3 not-prose">
            {['Solidity', 'Gnosis Safe', 'Create2', 'Hardhat', 'OpenZeppelin', 'Chainlink'].map(
              tech => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <h2>Architecture Overview</h2>
          <p>
            The Bittrees protocol leverages create2 factories to ensure identical contract addresses
            across different blockchains, while Gnosis Safe integration provides enterprise-grade
            security for critical operations. This architecture enables seamless cross-chain
            interactions without compromising security.
          </p>

          <h2>Code Repositories</h2>
          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-6 not-prose">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              📁 Core Repositories
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded border">
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">bittrees-core</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Main protocol smart contracts
                  </p>
                </div>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Solidity
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded border">
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">bittrees-factory</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Create2 deployment factories
                  </p>
                </div>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Solidity
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded border">
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">
                    bittrees-safe-modules
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Gnosis Safe integration modules
                  </p>
                </div>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                  Solidity
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-lg p-6 not-prose mt-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
              🔐 Enterprise Security
            </h3>
            <p className="text-blue-800 dark:text-blue-200">
              This project showcases my expertise in enterprise-grade blockchain infrastructure,
              with a focus on security, reliability, and cross-chain compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
