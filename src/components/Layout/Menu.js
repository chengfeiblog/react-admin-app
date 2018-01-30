import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const renderMenuItem = ({
  link, title, icon, ...props
}) => (
  <Menu.Item key={link} {...props}>
    <Link to={link}>
      {icon && <Icon type={icon} />}
      <span className="nav-text">{title}</span>
    </Link>
  </Menu.Item>
)

const renderSubMenu = ({
  link, title, icon, sub, ...props
}) => (
  <Menu.SubMenu
    key={link}
    title={
      <span>
        {icon && <Icon type={icon} />}
        <span className="nav-text">{title}</span>
      </span>
    }
    {...props}
  >
    {sub && sub.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
)

export default ({ menus, ...props }) => (
  <Menu {...props}>
    {menus &&
      menus.map(item =>
        (item.sub && item.sub.length
          ? renderSubMenu(item)
          : renderMenuItem(item)))}
  </Menu>
)
