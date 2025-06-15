import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/pizzadao')({
  component: PizzaDAOComponent,
})

function PizzaDAOComponent() {
  return (
    <div className="p-2">
      <h3>PizzaDAO</h3>
      early contributor, worked on
    </div>
  )
}
