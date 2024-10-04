export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function randomDateTimeStamp() {
  const start = new Date('2020-01-01')
  const end = new Date()

  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )

  const day = String(randomDate.getDate()).padStart(2, '0')
  const month = String(randomDate.getMonth() + 1).padStart(2, '0')
  const year = randomDate.getFullYear()

  return `${day}/${month}/${year}`
}
