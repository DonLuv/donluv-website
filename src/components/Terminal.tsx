import { useState, useEffect, useRef } from 'react'
import { ProjectId, useCircuitState } from '../hooks/useCircuitState'

interface TerminalLine {
  type: 'command' | 'output' | 'error'
  text: string
  timestamp: number
}

const projects: Record<ProjectId, { name: string; description: string }> = {
  pizzadao: { name: 'PizzaDAO', description: 'Early contributor to the pizza revolution' },
  frogland: { name: 'Frogland', description: 'Co-founder of metaverse NFT gaming' },
  bittrees: { name: 'Bittrees', description: 'Core dev on multichain contracts' },
}

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      text: 'donluv@web3:~$ Welcome to the project explorer',
      timestamp: Date.now(),
    },
    { type: 'output', text: 'Type "help" for available commands', timestamp: Date.now() },
  ])
  const [currentInput, setCurrentInput] = useState('')
  const { circuit, powerUp, activateProject } = useCircuitState()
  const terminalRef = useRef<HTMLDivElement>(null)

  const addLine = (type: TerminalLine['type'], text: string) => {
    setLines(prev => [...prev, { type, text, timestamp: Date.now() }])
  }

  const executeCommand = async (command: string) => {
    const [cmd, ...args] = command.toLowerCase().trim().split(' ')

    addLine('command', `donluv@web3:~$ ${command}`)

    switch (cmd) {
      case 'help': {
        addLine('output', 'Available commands:')
        addLine('output', '  ls projects     - List all projects')
        addLine('output', '  status          - Show circuit status')
        addLine('output', '  power <project> - Power up a project')
        addLine('output', '  open <project>  - Activate and navigate to project')
        addLine('output', '  clear           - Clear terminal')
        break
      }

      case 'ls': {
        if (args[0] === 'projects') {
          addLine('output', 'Available projects:')
          Object.entries(projects).forEach(([id, project]) => {
            const status = circuit[id as ProjectId].status
            const statusIcon = status === 'off' ? '●' : status === 'powered' ? '⚡' : '🔥'
            addLine('output', `  ${statusIcon} ${id}/ - ${project.name}`)
          })
        } else {
          addLine('output', 'projects/')
        }
        break
      }

      case 'status': {
        addLine('output', 'Circuit Status:')
        Object.entries(circuit).forEach(([id, state]) => {
          const power = state.powerLevel
          const bars = '█'.repeat(Math.floor(power / 10)) + '░'.repeat(10 - Math.floor(power / 10))
          addLine('output', `  ${id}: [${bars}] ${power}%`)
        })
        break
      }

      case 'power': {
        const projectId = args[0] as ProjectId
        if (projectId && projects[projectId]) {
          addLine('output', `Initializing power sequence for ${projects[projectId].name}...`)
          powerUp(projectId)

          // Add some dramatic output
          setTimeout(() => addLine('output', 'Routing power through circuit pathways...'), 500)
          setTimeout(() => addLine('output', 'Capacitors charging...'), 1000)
          setTimeout(
            () => addLine('output', `✓ ${projects[projectId].name} circuit powered!`),
            1500
          )
        } else {
          addLine('error', `Unknown project: ${args[0]}`)
        }
        break
      }

      case 'open': {
        const openProjectId = args[0] as ProjectId
        if (openProjectId && projects[openProjectId]) {
          if (circuit[openProjectId].status === 'powered') {
            addLine('output', `Activating ${projects[openProjectId].name}...`)
            addLine('output', 'Establishing connection...')
            activateProject(openProjectId)
          } else {
            addLine(
              'error',
              `Project ${openProjectId} is not powered. Use 'power ${openProjectId}' first.`
            )
          }
        } else {
          addLine('error', `Unknown project: ${args[0]}`)
        }
        break
      }

      case 'clear': {
        setLines([])
        break
      }

      case '': {
        // Empty command, just add the prompt
        break
      }

      default: {
        addLine('error', `Command not found: ${cmd}`)
        addLine('output', 'Type "help" for available commands')
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim()) {
      executeCommand(currentInput)
      setCurrentInput('')
    }
  }

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div className="bg-black text-green-400 font-mono text-sm rounded-lg overflow-hidden border border-green-400/30">
      {/* Terminal Header */}
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm">Terminal - Project Explorer</span>
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="h-96 overflow-y-auto p-4 space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${
              line.type === 'command'
                ? 'text-white'
                : line.type === 'error'
                  ? 'text-red-400'
                  : 'text-green-400'
            }`}
          >
            {line.text}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex">
          <span className="text-green-400">donluv@web3:~$ </span>
          <input
            type="text"
            value={currentInput}
            onChange={e => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent text-white outline-none caret-green-400"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  )
}
