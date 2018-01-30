import React, { Component } from 'react'
import { Menu, Icon, Layout, Badge, Popover } from 'antd'
import screenfull from 'screenfull'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import avater from 'assets/img/b1.jpg'
// import { gitOauthToken, gitOauthInfo } from '../axios'

const { Header } = Layout
const { SubMenu } = Menu
const MenuItemGroup = Menu.ItemGroup

class HeaderCustom extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
    toggle: PropTypes.func,
  }
  state = {
    user: '成飞',
  }
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }
  menuClick = (e) => {
    console.log(e)
    e.key === 'logout' && this.logout()
  }
  logout = () => {
    localStorage.removeItem('user')
    this.props.history.push('/login')
  }
  render () {
    return (
      <Header
        style={{ background: '#fff', padding: 0, height: 65 }}
        className="custom-theme"
      >
        <Icon
          className="trigger custom-trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu
          mode="horizontal"
          style={{ lineHeight: '64px', float: 'right' }}
          onClick={this.menuClick}
        >
          <Menu.Item key="full" onClick={this.screenFull}>
            <Icon type="arrows-alt" onClick={this.screenFull} />
          </Menu.Item>
          <Menu.Item key="1">
            <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
              <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <SubMenu
            title={
              <span className="avatar">
                <img src={avater} alt="头像" />
              </span>
            }
          >
            <MenuItemGroup title="用户中心">
              <Menu.Item key="setting:1">你好 - {this.state.user}</Menu.Item>
              <Menu.Item key="setting:2">个人信息</Menu.Item>
              <Menu.Item key="logout">
                <span onClick={this.logout}>退出登录</span>
              </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
        <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
      </Header>
    )
  }
}

export default withRouter(connect()(HeaderCustom))
