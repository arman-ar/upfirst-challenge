import React from 'react'

interface Main {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

export function Main({ children }: Main) {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-4">{children}</main>
  )
}
