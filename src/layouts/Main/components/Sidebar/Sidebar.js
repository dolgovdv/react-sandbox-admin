import React from "react"
// import { Nav, ListGroup } from 'react-bootstrap'
import { NavLink } from "react-router-dom"
// import { useTranslation } from 'react-i18next'
// import './navigation.css'
const Sidebar = (props) => {
  // const { t } = useTranslation()

  return (
    // <div className="sidebar-container">
    //   {/* <div className="list-group"> */}
    //   {/* <NavLink to="/owerview" className="navlink" activeClassName="selected">
    //       {t('owerview')}
    //     </NavLink>
    //     <NavLink to="/smartsite" className="navlink" activeClassName="selected">
    //       {t('smartsite')}
    //     </NavLink> */}
    //   <ul className="sidebar-list-group ">
    //     <li className="sidebar-list-group-item ">a</li>
    //     <li className="sidebar-list-group-item ">b</li>
    //   </ul>
    //   {/* </div> */}
    // </div>
    <div className="sidebar-container">
      <nav>
        <ul className="sidebar-nav">
          <li>
            <NavLink exact to="/">
              Owerview
            </NavLink>
          </li>
          <li>
            <NavLink to="/map">Map</NavLink>
          </li>
          <li>
            <NavLink to="/objects">Objects</NavLink>
          </li>

          {/* <li>
            <NavLink to="/smartsite">ÃÂ¡ÃÂ¼ÃÂ°ÃÂÃÂ ÃÂÃÂ°ÃÂ¹ÃÂ</NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar
