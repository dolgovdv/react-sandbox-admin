import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./styles.scss"

// class NavLink extends React.Component {
// constructor(props) {
//   super(props)

//   handleOnClick = handleOnClick.bind(this)
// }

const NavLink = ({
  onClick,
  href,
  className,
  active,
  disabled,
  tag: Tag,
  innerRef,
  ...attrs
}) => {
  const handleOnClick = (e) => {
    if (disabled) {
      e.preventDefault()
      return
    }

    if (href === "#") {
      e.preventDefault()
    }

    if (onClick) {
      onClick(e)
    }
  }

  const classes = classNames(
    className,
    "nav-link",
    disabled && "disabled",
    active && "active"
  )

  return (
    <Tag
      {...attrs}
      ref={innerRef}
      onClick={handleOnClick}
      className={classes}
    />
  )
}

NavLink.propTypes = {
  /**
   * Whether it is disabled, or not.
   */
  disabled: PropTypes.bool,
  /**
   * Whether it is active, or not.
   */
  active: PropTypes.bool,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The function that should be triggered on click.
   */
  onClick: PropTypes.func,
  /**
   * The href attribute value.
   */
  href: PropTypes.any,
  /**
   * The component's tag type.
   */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
}

NavLink.defaultProps = {
  tag: "a",
}

export default NavLink
