import React from "react";
// import { Container, Row, Col } from 'react-bootstrap'

import { Sidebar, Topbar } from "./components";

const Main = props => {
  const { children } = props;
  return (
    <div>
      <Topbar />
      <div className="layout-main">
        <Sidebar />
        <main className="grid-main">{children}</main>
      </div>
    </div>
  );
};

export default Main;
