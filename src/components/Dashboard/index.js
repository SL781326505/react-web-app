import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '@/store/user'
import { Layout, Menu, Icon, Popover } from 'antd'
import routes from '@/routes'
import Home from 'containers/Home'
import './Dashboard.less'


@connect(
  state => state.user,
  { handleLogout }
)
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  handleClick = (e) => {
    // console.log(e.key)
    this.props.history.push(e.key)
  }

  logout = () => {
    this.props.handleLogout()
    this.props.history.push('/login')
  }

  render() {
    const { Header, Sider, Content } = Layout
    const SubMenu = Menu.SubMenu
    const pathname = this.props.location.pathname

    return (
      <Layout className="layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="sider"
        >
        <div className="logo">
          <div>logo</div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          onClick={this.handleClick}
        >
          <Menu.Item key="/app" style={{marginTop: 0}}>
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          {
            routes.map(subMenu => (
              <SubMenu
                key={subMenu.path}
                title={<span><Icon type={subMenu.icon ? subMenu.icon : 'smile'}/><span>{subMenu.name}</span></span>}
              >
                {
                  subMenu.children.map(item => (
                    <Menu.Item key={subMenu.path + item.path}>{item.name}</Menu.Item>
                  ))
                }
              </SubMenu>
            ))
          }
        </Menu>
        </Sider>

        <Layout className="main-layout">
          <Header className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Popover
              className="user-menu"
              content={<span style={{cursor: 'pointer'}} onClick={this.logout}>退出登录</span>}
            >
              <span className="avatar">头像</span>
            </Popover>
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/app" exact component={Home}/>
              {
                routes.map(route => {
                  return route.children.map(child => (
                    <Route
                      key={child.name}
                      path={route.path + child.path}
                      component={child.component}
                    />
                  ))
                })
              }
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Dashboard
