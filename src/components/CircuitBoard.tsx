import { ProjectId, useCircuitState } from '../hooks/useCircuitState'

const projects: Record<ProjectId, { name: string; x: number; y: number; color: string }> = {
  pizzadao: { name: 'PizzaDAO', x: 100, y: 80, color: '#f97316' },
  frogland: { name: 'Frogland', x: 200, y: 160, color: '#22c55e' },
  bittrees: { name: 'Bittrees', x: 300, y: 80, color: '#3b82f6' },
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
      return '0 0 20px currentColor, 0 0 40px currentColor'
    }
    if (state.status === 'powering') {
      return `0 0 ${state.powerLevel / 5}px currentColor`
    }
    return 'none'
  }

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
      <h3 className="text-white text-lg font-semibold mb-4 text-center">Circuit Board</h3>

      <svg
        width="400"
        height="240"
        viewBox="0 0 400 240"
        className="w-full h-auto border border-gray-600 rounded bg-gray-800"
      >
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" />
          </pattern>

          {/* Glow Filters */}
          {Object.entries(projects).map(([id, _]) => (
            <filter key={id} id={`glow-${id}`}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Circuit Traces */}
        <g stroke="#4b5563" strokeWidth="2" fill="none">
          {/* Main power line */}
          <path d="M 50 120 L 350 120" />

          {/* Branch to pizzadao */}
          <path d="M 100 120 L 100 80" />

          {/* Branch to frogland */}
          <path d="M 200 120 L 200 160" />

          {/* Branch to bittrees */}
          <path d="M 300 120 L 300 80" />
        </g>

        {/* Powered Traces (glowing) */}
        {Object.entries(projects).map(([projectId, project]) => {
          const state = circuit[projectId as ProjectId]
          if (
            state.status === 'powering' ||
            state.status === 'powered' ||
            state.status === 'activated'
          ) {
            return (
              <g key={`trace-${projectId}`} stroke={project.color} strokeWidth="3" fill="none">
                <path
                  d={`M 50 120 L ${project.x} 120 L ${project.x} ${project.y}`}
                  opacity={getComponentOpacity(projectId as ProjectId)}
                  style={{ filter: `url(#glow-${projectId})` }}
                />

                {/* Animated power flow */}
                {state.status === 'powering' && (
                  <circle r="3" fill={project.color}>
                    <animateMotion
                      dur="1s"
                      repeatCount="indefinite"
                      path={`M 50 120 L ${project.x} 120 L ${project.x} ${project.y}`}
                    />
                  </circle>
                )}
              </g>
            )
          }
          return null
        })}

        {/* Power Source */}
        <g>
          <circle cx="50" cy="120" r="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <text x="50" y="125" textAnchor="middle" fontSize="10" fill="#000">
            ⚡
          </text>
        </g>

        {/* Project Components */}
        {Object.entries(projects).map(([projectId, project]) => {
          const state = circuit[projectId as ProjectId]
          const isClickable = state.status === 'off' || state.status === 'powered'

          return (
            <g
              key={projectId}
              className={`transition-all duration-300 ${isClickable ? 'cursor-pointer hover:scale-110' : ''}`}
              onClick={() => handleComponentClick(projectId as ProjectId)}
            >
              {/* Component Body */}
              <rect
                x={project.x - 15}
                y={project.y - 10}
                width="30"
                height="20"
                rx="4"
                fill={project.color}
                opacity={getComponentOpacity(projectId as ProjectId)}
                style={{
                  boxShadow: getGlowIntensity(projectId as ProjectId),
                  filter:
                    state.status === 'powered' || state.status === 'activated'
                      ? `url(#glow-${projectId})`
                      : 'none',
                }}
              />

              {/* Component Pins */}
              <circle cx={project.x - 10} cy={project.y} r="2" fill="#6b7280" />
              <circle cx={project.x} cy={project.y} r="2" fill="#6b7280" />
              <circle cx={project.x + 10} cy={project.y} r="2" fill="#6b7280" />

              {/* Component Label */}
              <text
                x={project.x}
                y={project.y + 25}
                textAnchor="middle"
                fontSize="10"
                fill="#e5e7eb"
                className="font-mono"
              >
                {project.name}
              </text>

              {/* Power Level Indicator */}
              {state.status === 'powering' && (
                <g>
                  <rect
                    x={project.x - 15}
                    y={project.y + 15}
                    width="30"
                    height="3"
                    fill="#374151"
                    rx="1"
                  />
                  <rect
                    x={project.x - 15}
                    y={project.y + 15}
                    width={(state.powerLevel / 100) * 30}
                    height="3"
                    fill={project.color}
                    rx="1"
                  />
                </g>
              )}

              {/* Status Indicator */}
              <circle
                cx={project.x + 12}
                cy={project.y - 12}
                r="3"
                fill={
                  state.status === 'activated'
                    ? '#22c55e'
                    : state.status === 'powered'
                      ? '#fbbf24'
                      : state.status === 'powering'
                        ? '#f97316'
                        : '#6b7280'
                }
              />
            </g>
          )
        })}
      </svg>

      {/* Instructions */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>Click components to power them up, then click again to activate</p>
      </div>
    </div>
  )
}
