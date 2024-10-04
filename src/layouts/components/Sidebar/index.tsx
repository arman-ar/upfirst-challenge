import { Button } from '../../../components'

interface SidebarItem {
  label: string
  path: string
}

interface SidebarProps {
  items: SidebarItem[]
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-300 p-4 shadow-lg">
      <ul className="flex-1 space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.path}
              className="flex items-center rounded-lg p-2 transition-all duration-300 hover:bg-gray-200"
            >
              <span className="text-gray-700">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <Button label="Sign out" type="secondary" />
    </div>
  )
}
