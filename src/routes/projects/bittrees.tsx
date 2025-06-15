import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/bittrees')({
  component: BittreesComponent,
})

function BittreesComponent() {
  return (
    <div className="p-2">
      <h3>Bittrees</h3>
      core dev, worked on the following repositories
    </div>
  )
}
