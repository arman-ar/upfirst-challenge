import React from 'react'
import { Footer, Header, Main, Sidebar } from '../components'

interface MainLayout {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
