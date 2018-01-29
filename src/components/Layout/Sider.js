import React, { Component } from 'react'
import { Layout } from 'antd'
import { withRouter } from 'react-router-dom'
import { menus } from '@/constants/menus'
import PropTypes from 'prop-types'
import styles from './Sider.less'
import SiderMenu from './Menu'

const { Sider } = Layout

class SiderCustom extends Component {
  static propTypes = {
    collapsed: PropTypes.bool,
  }
  state = {
    collapsed: false,
    mode: 'inline',
    openKey: '',
    selectedKey: '',
    firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
  }
  componentDidMount () {
    this.setMenuOpen(this.props)
  }
  componentWillReceiveProps (nextProps) {
    this.onCollapse(nextProps.collapsed)
    this.setMenuOpen(nextProps)
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.collapsed === this.props.collapsed) {
      return false
    }
    return true
  }

  setMenuOpen = (props) => {
    const { pathname } = props.location
    this.setState({
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname,
    })
  }
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    })
  }
  menuClick = (e) => {
    this.setState({
      selectedKey: e.key,
    })
    console.log(this.state)
  }
  openMenu = (v) => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    })
  }
  render () {
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        collapsed={this.props.collapsed}
        style={{ overflowY: 'auto' }}
      >
        <div className={styles.logo} />
        <SiderMenu
          menus={menus}
          onClick={this.menuClick}
          theme="dark"
          mode="inline"
          selectedKeys={[this.state.selectedKey]}
          openKeys={this.state.firstHide ? null : [this.state.openKey]}
          onOpenChange={this.openMenu}
        />
        <style>
          {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
        </style>
      </Sider>
    )
  }
}

export default withRouter(SiderCustom)
