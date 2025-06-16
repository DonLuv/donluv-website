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
    { type: 'output', text: 'DONLUV_SYSTEM v3.14 INITIALIZED', timestamp: Date.now() },
    { type: 'output', text: 'PROJECT_EXPLORER module loaded successfully', timestamp: Date.now() },
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
        addLine('output', '=== DONLUV SYSTEM COMMANDS ===')
        addLine('output', '  scan projects     - Scan for available project modules')
        addLine('output', '  status            - Show circuit board diagnostics')
        addLine('output', '  power <project>   - Initialize project power sequence')
        addLine('output', '  execute <project> - Execute project navigation protocol')
        addLine('output', '  clear             - Clear terminal buffer')
        addLine('output', '  about             - System information')
        break
      }

      case 'scan': {
        if (args[0] === 'projects') {
          addLine('output', 'SCANNING FOR PROJECT MODULES...')
          setTimeout(() => {
            addLine('output', '████████████████████ 100%')
            addLine('output', 'SCAN COMPLETE. Found 3 project modules:')
            Object.entries(projects).forEach(([id, project]) => {
              const status = circuit[id as ProjectId].status
              const statusIcon =
                status === 'off' ? '[OFFLINE]' : status === 'powered' ? '[READY]' : '[ACTIVE]'
              addLine('output', `  > ${id.toUpperCase()}_MODULE ${statusIcon} - ${project.name}`)
            })
          }, 1000)
        } else {
          addLine('output', 'Available scan targets: projects')
        }
        break
      }

      case 'status': {
        addLine('output', '=== CIRCUIT BOARD DIAGNOSTICS ===')
        Object.entries(circuit).forEach(([id, state]) => {
          const power = state.powerLevel
          const bars = '█'.repeat(Math.floor(power / 10)) + '░'.repeat(10 - Math.floor(power / 10))
          const status = state.status.toUpperCase().padEnd(8)
          addLine('output', `  ${id.toUpperCase()}_MODULE: [${bars}] ${power}% ${status}`)
        })
        addLine('output', 'SYSTEM NOMINAL - ALL CIRCUITS OPERATIONAL')
        break
      }

      case 'power': {
        const projectId = args[0] as ProjectId
        if (projectId && projects[projectId]) {
          addLine(
            'output',
            `INITIALIZING POWER SEQUENCE: ${projects[projectId].name.toUpperCase()}`
          )
          addLine('output', 'Checking safety protocols...')
          setTimeout(() => addLine('output', 'Routing power through PCB pathways...'), 500)
          setTimeout(() => addLine('output', 'Capacitor banks charging...'), 1000)
          powerUp(projectId)
          setTimeout(
            () =>
              addLine(
                'output',
                `✓ ${projects[projectId].name.toUpperCase()}_MODULE powered and ready!`
              ),
            1500
          )
        } else {
          addLine('error', `ERROR: Unknown module identifier "${args[0]}"`)
          addLine('output', 'Use "scan projects" to list available modules')
        }
        break
      }

      case 'execute': {
        const execProjectId = args[0] as ProjectId
        if (execProjectId && projects[execProjectId]) {
          if (circuit[execProjectId].status === 'powered') {
            addLine('output', `EXECUTING ${projects[execProjectId].name.toUpperCase()}_MODULE...`)
            addLine('output', 'Establishing secure connection...')
            addLine('output', 'Navigation protocol initiated...')
            activateProject(execProjectId)
          } else {
            addLine('error', `ERROR: ${execProjectId.toUpperCase()}_MODULE is not powered`)
            addLine('output', `Use "power ${execProjectId}" to initialize power sequence`)
          }
        } else {
          addLine('error', `ERROR: Unknown module identifier "${args[0]}"`)
        }
        break
      }

      case 'about': {
        addLine('output', '=== DONLUV SYSTEM INFORMATION ===')
        addLine('output', 'SYSTEM: Web3 Portfolio Interface v3.14')
        addLine('output', 'ARCHITECTURE: React + TanStack Router + Wagmi')
        addLine('output', 'THEME: PCB_RETROGREEN')
        addLine('output', 'MODULES: 3 project interfaces loaded')
        addLine('output', 'STATUS: Fully operational')
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
        addLine('error', `COMMAND NOT RECOGNIZED: ${cmd}`)
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
    <div className="cut-corner border-2 border-primary bg-card/90 backdrop-blur-sm glow-border">
      {/* Terminal Header */}
      <div className="border-b border-primary/50 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 cut-corner bg-destructive border border-destructive"></div>
          <div className="w-3 h-3 cut-corner bg-yellow-500 border border-yellow-400"></div>
          <div className="w-3 h-3 cut-corner bg-primary border border-primary"></div>
        </div>
        <span className="text-sm font-mono terminal-glow text-primary">DONLUV_TERMINAL_v3.14</span>
      </div>

      {/* Terminal Content */}
      <div ref={terminalRef} className="h-96 overflow-y-auto p-4 space-y-1 font-mono text-sm">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`terminal-glow ${
              line.type === 'command'
                ? 'text-foreground'
                : line.type === 'error'
                  ? 'text-destructive'
                  : 'text-primary'
            }`}
          >
            {line.text}
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex">
          <span className="text-primary terminal-glow">donluv@web3:~$ </span>
          <input
            type="text"
            value={currentInput}
            onChange={e => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent text-foreground outline-none caret-primary terminal-glow font-mono"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  )
}
