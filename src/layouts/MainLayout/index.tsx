import React from 'react'
import { Footer, Header, Main, Sidebar } from '../components'

interface MainLayout {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

const MOCK_SIDEBAR_ITEMS = [
  { label: 'Home', path: '#' },
  { label: 'About', path: '#' }
]

const MainLayout = ({ children }: MainLayout) => {
  return (
    <div className="flex h-screen">
      <Sidebar items={MOCK_SIDEBAR_ITEMS} />
      <div className="flex w-3/4 flex-1 flex-col ">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
