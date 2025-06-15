import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  return (
    <div className="p-2">
      <h3>Projects</h3>
      <ul>
        <li>PizzaDAO</li>
        <li>Frogland</li>
        <li>Bittrees</li>
      </ul>
    </div>
  )
}
