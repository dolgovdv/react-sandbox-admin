import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
// import { Col } from 'shards-react'
import { useTranslation } from "react-i18next"
import "./styles.scss"

// import SidebarMainNavbar from './SidebarMainNavbar'
// import SidebarSearch from './SidebarSearch'
import SidebarNavItems from "./SidebarNavItems"

// import { Store } from '../../../flux'

const MainSidebar = () => {
  const { t } = useTranslation()
  const [navItems] = useState([
    {
      title: t("Owerview"),
      to: "/",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
    },
    {
      title: t("Map"),
      to: "/map",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
    },
    {
      title: t("Objects"),
      to: "/objects",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: "",
    },
  ])
  const classes = classNames(
    "main-sidebar",
    "open"
    // this.state.menuVisible && 'open'
  )

  return (
    // <Col
    //   tag="aside"
    //   className={classes}
    //   lg={{ size: 2 }}
    //   md={{ size: 3 }}
    // >
    // <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
    // <SidebarSearch />
    <div className={classes}>
      <SidebarNavItems navItems={navItems} />
    </div>
    // </Col>
  )
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool,
}

MainSidebar.defaultProps = {
  hideLogoText: false,
}

export default MainSidebar
