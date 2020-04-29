import React from 'react'
// import { Nav, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// import './navigation.css'
const Sidebar = (props) => {
  const { t } = useTranslation()

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
              {t('Owerview')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/map">{t('Map')}</NavLink>
          </li>
          <li>
            <NavLink to="/objects">{t('Objects')}</NavLink>
          </li>

          {/* <li>
            <NavLink to="/smartsite">Ð¡Ð¼Ð°ÑÑ ÑÐ°Ð¹Ñ</NavLink>
          </li> */}
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar
