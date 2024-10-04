import { Button } from '../../../components'

export function Header() {
  return (
    <header className="flex justify-end bg-gray-200 p-4">
      <Button label="My account" type="secondary" />
    </header>
  )
}
