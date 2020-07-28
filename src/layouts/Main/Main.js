import React from "react"

import { Topbar, MainSidebar } from "./components" //Sidebar,

const Main = (props) => {
  const { children } = props
  return (
    <div>
      <Topbar />
      <div className="layout-main">
        <MainSidebar />

        <main className="grid-main">{children}</main>
      </div>
    </div>
  )
}

export default Main
