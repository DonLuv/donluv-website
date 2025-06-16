import { ProjectId, useCircuitState } from '../hooks/useCircuitState'

const projects: Record<ProjectId, { name: string; x: number; y: number; color: string }> = {
  pizzadao: { name: 'PIZZA_MODULE', x: 100, y: 80, color: '#00ff88' },
  frogland: { name: 'FROG_MODULE', x: 200, y: 160, color: '#39ff14' },
  bittrees: { name: 'TREE_MODULE', x: 300, y: 80, color: '#00ff88' },
}

export function CircuitBoard() {
  const { circuit, powerUp, activateProject } = useCircuitState()

  const handleComponentClick = (projectId: ProjectId) => {
    const state = circuit[projectId]

    if (state.status === 'off') {
      powerUp(projectId)
    } else if (state.status === 'powered') {
      activateProject(projectId)
    }
  }

  const getComponentOpacity = (projectId: ProjectId) => {
    const state = circuit[projectId]
    switch (state.status) {
      case 'off':
        return 0.3
      case 'powering':
        return 0.3 + (state.powerLevel / 100) * 0.7
      case 'powered':
        return 1
      case 'activated':
        return 1
      default:
        return 0.3
    }
  }

  const getGlowIntensity = (projectId: ProjectId) => {
    const state = circuit[projectId]
    if (state.status === 'powered' || state.status === 'activated') {
      return `url(#glow-${projectId})`
    }
    return 'none'
  }

  return (
    <div className="cut-corner border-2 border-primary bg-card/90 backdrop-blur-sm glow-border">
      <div className="border-b border-primary/50 px-4 py-3">
        <h3 className="text-primary font-mono font-semibold terminal-glow">PCB_INTERFACE_v2.1</h3>
      </div>

      <div className="p-6">
        <svg
          width="400"
          height="240"
          viewBox="0 0 400 240"
          className="w-full h-auto border-2 border-primary/30 cut-corner bg-background/50"
        >
          {/* Background PCB Pattern */}
          <defs>
            <pattern id="pcb-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="rgba(0, 255, 136, 0.1)"
                strokeWidth="0.5"
              />
            </pattern>

            <pattern id="pcb-traces" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 0 20 L 40 20 M 20 0 L 20 40"
                fill="none"
                stroke="rgba(0, 255, 136, 0.05)"
                strokeWidth="1"
              />
            </pattern>

            {/* Enhanced Glow Filters */}
            {Object.entries(projects).map(([id, _project]) => (
              <filter key={id} id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
          </defs>

          <rect width="100%" height="100%" fill="url(#pcb-grid)" />
          <rect width="100%" height="100%" fill="url(#pcb-traces)" />

          {/* Main Power Rails */}
          <g stroke="rgba(0, 255, 136, 0.6)" strokeWidth="3" fill="none">
            {/* Horizontal power rail */}
            <path d="M 30 120 L 370 120" />

            {/* Vertical power rails */}
            <path d="M 100 40 L 100 200" />
            <path d="M 200 40 L 200 200" />
            <path d="M 300 40 L 300 200" />
          </g>

          {/* PCB Via Points */}
          {[50, 150, 250, 350].map(x =>
            [60, 120, 180].map(y => (
              <circle
                key={`${x}-${y}`}
                cx={x}
                cy={y}
                r="2"
                fill="rgba(0, 255, 136, 0.4)"
                stroke="rgba(0, 255, 136, 0.8)"
                strokeWidth="1"
              />
            ))
          )}

          {/* Powered Traces (glowing) */}
          {Object.entries(projects).map(([projectId, project]) => {
            const state = circuit[projectId as ProjectId]
            if (
              state.status === 'powering' ||
              state.status === 'powered' ||
              state.status === 'activated'
            ) {
              return (
                <g key={`trace-${projectId}`} stroke={project.color} strokeWidth="4" fill="none">
                  <path
                    d={`M 50 120 L ${project.x} 120 L ${project.x} ${project.y}`}
                    opacity={getComponentOpacity(projectId as ProjectId)}
                    filter={getGlowIntensity(projectId as ProjectId)}
                  />

                  {/* Animated power flow particles */}
                  {state.status === 'powering' && (
                    <>
                      <circle r="2" fill={project.color} opacity="0.8">
                        <animateMotion
                          dur="0.8s"
                          repeatCount="indefinite"
                          path={`M 50 120 L ${project.x} 120 L ${project.x} ${project.y}`}
                        />
                      </circle>
                      <circle r="1" fill="#ffffff" opacity="0.6">
                        <animateMotion
                          dur="0.8s"
                          begin="0.2s"
                          repeatCount="indefinite"
                          path={`M 50 120 L ${project.x} 120 L ${project.x} ${project.y}`}
                        />
                      </circle>
                    </>
                  )}
                </g>
              )
            }
            return null
          })}

          {/* Power Source */}
          <g>
            <rect
              x="42"
              y="112"
              width="16"
              height="16"
              rx="2"
              fill="rgba(0, 255, 136, 0.8)"
              stroke="#00ff88"
              strokeWidth="2"
            />
            <text x="50" y="123" textAnchor="middle" fontSize="12" fill="#000000" fontWeight="bold">
              ⚡
            </text>
            <text
              x="50"
              y="140"
              textAnchor="middle"
              fontSize="8"
              fill="#00ff88"
              className="font-mono"
            >
              PWR
            </text>
          </g>

          {/* Project Components */}
          {Object.entries(projects).map(([projectId, project]) => {
            const state = circuit[projectId as ProjectId]
            const isClickable = state.status === 'off' || state.status === 'powered'

            return (
              <g
                key={projectId}
                className={`transition-all duration-300 ${isClickable ? 'cursor-pointer' : ''}`}
                onClick={() => handleComponentClick(projectId as ProjectId)}
              >
                {/* Component PCB Outline */}
                <rect
                  x={project.x - 20}
                  y={project.y - 15}
                  width="40"
                  height="30"
                  rx="2"
                  fill="none"
                  stroke="rgba(0, 255, 136, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                />

                {/* Component Body (IC Package) */}
                <rect
                  x={project.x - 18}
                  y={project.y - 12}
                  width="36"
                  height="24"
                  rx="1"
                  fill="rgba(0, 255, 136, 0.1)"
                  stroke={project.color}
                  strokeWidth="2"
                  opacity={getComponentOpacity(projectId as ProjectId)}
                  filter={
                    state.status === 'powered' || state.status === 'activated'
                      ? getGlowIntensity(projectId as ProjectId)
                      : 'none'
                  }
                />

                {/* Component Pins */}
                {[-12, -6, 0, 6, 12].map(offset => (
                  <g key={offset}>
                    <rect
                      x={project.x + offset - 1}
                      y={project.y - 15}
                      width="2"
                      height="3"
                      fill="#00ff88"
                    />
                    <rect
                      x={project.x + offset - 1}
                      y={project.y + 12}
                      width="2"
                      height="3"
                      fill="#00ff88"
                    />
                  </g>
                ))}

                {/* Component Label */}
                <text
                  x={project.x}
                  y={project.y + 30}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#00ff88"
                  className="font-mono"
                >
                  {project.name}
                </text>

                {/* Power Level Indicator */}
                {state.status === 'powering' && (
                  <g>
                    <rect
                      x={project.x - 18}
                      y={project.y + 18}
                      width="36"
                      height="2"
                      fill="rgba(0, 255, 136, 0.2)"
                      rx="1"
                    />
                    <rect
                      x={project.x - 18}
                      y={project.y + 18}
                      width={(state.powerLevel / 100) * 36}
                      height="2"
                      fill={project.color}
                      rx="1"
                    />
                  </g>
                )}

                {/* Status LED */}
                <circle
                  cx={project.x + 15}
                  cy={project.y - 10}
                  r="3"
                  fill={
                    state.status === 'activated'
                      ? '#39ff14'
                      : state.status === 'powered'
                        ? '#00ff88'
                        : state.status === 'powering'
                          ? '#ffff00'
                          : 'rgba(0, 255, 136, 0.2)'
                  }
                  stroke="#00ff88"
                  strokeWidth="1"
                  filter={state.status !== 'off' ? `url(#glow-${projectId})` : 'none'}
                />

                {/* Component ID */}
                <text
                  x={project.x}
                  y={project.y + 2}
                  textAnchor="middle"
                  fontSize="6"
                  fill="#000000"
                  className="font-mono font-bold"
                >
                  {projectId.slice(0, 3).toUpperCase()}
                </text>
              </g>
            )
          })}
        </svg>

        {/* Instructions */}
        <div className="mt-4 text-center text-sm text-muted-foreground font-mono">
          <p className="terminal-glow">CLICK MODULES TO INITIALIZE → CLICK AGAIN TO EXECUTE</p>
        </div>
      </div>
    </div>
  )
}
