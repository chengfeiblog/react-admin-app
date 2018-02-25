import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { MyLayout } from 'components'
import Routes from './routers'

const { Content, Footer } = Layout
let { Header, Sider } = MyLayout
class App extends Component {
    state = {
        collapsed: false,
    }
    /** 侧边开关 */
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render () {
        return (
            <Layout style={{ height: '100%' }}>
                <Sider collapsed={this.state.collapsed} />
                <Layout style={{ flexDirection: 'column' }}>
                    <Header
                        toggle={this.toggle}
                        collapsed={this.state.collapsed}
                    />
                    <Content
                        style={{
                            margin: '12px 16px 0 16px',
                            overflow: 'initial',
                        }}
                    >
                        <Routes />
                    </Content>
                    <Footer style={{ textAlign: 'center' }} />
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => {
    const { auth = { data: {} }, responsive = { data: {} } } = state.httpData
    return { auth, responsive }
}

export default connect(mapStateToProps)(App)
