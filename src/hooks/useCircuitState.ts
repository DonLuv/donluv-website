import { useState, useCallback } from 'react'
import { useNavigate } from '@tanstack/react-router'

export type ProjectId = 'pizzadao' | 'frogland' | 'bittrees'
export type CircuitStatus = 'off' | 'powering' | 'powered' | 'activated'

export interface ProjectState {
  status: CircuitStatus
  powerLevel: number // 0-100
}

export interface CircuitState {
  pizzadao: ProjectState
  frogland: ProjectState
  bittrees: ProjectState
}

const initialState: CircuitState = {
  pizzadao: { status: 'off', powerLevel: 0 },
  frogland: { status: 'off', powerLevel: 0 },
  bittrees: { status: 'off', powerLevel: 0 },
}

export function useCircuitState() {
  const [circuit, setCircuit] = useState<CircuitState>(initialState)
  const navigate = useNavigate()

  const powerUp = useCallback((projectId: ProjectId) => {
    setCircuit(prev => ({
      ...prev,
      [projectId]: { status: 'powering', powerLevel: 0 },
    }))

    // Simulate power-up animation
    let power = 0
    const interval = setInterval(() => {
      power += 10
      setCircuit(prev => ({
        ...prev,
        [projectId]: { status: 'powering', powerLevel: power },
      }))

      if (power >= 100) {
        clearInterval(interval)
        setCircuit(prev => ({
          ...prev,
          [projectId]: { status: 'powered', powerLevel: 100 },
        }))
      }
    }, 100)
  }, [])

  const activateProject = useCallback(
    (projectId: ProjectId) => {
      setCircuit(prev => ({
        ...prev,
        [projectId]: { status: 'activated', powerLevel: 100 },
      }))

      // Navigate after activation animation
      setTimeout(() => {
        navigate({ to: `/projects/${projectId}` })
      }, 1000)
    },
    [navigate]
  )

  const resetCircuit = useCallback(() => {
    setCircuit(initialState)
  }, [])

  return {
    circuit,
    powerUp,
    activateProject,
    resetCircuit,
  }
}
