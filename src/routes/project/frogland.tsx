import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/frogland')({
  component: FroglandComponent,
})

function FroglandComponent() {
  return (
    <div className="p-2">
      <h3>Frogland</h3>
      cofounder and dev, (add links to work)
    </div>
  )
}
