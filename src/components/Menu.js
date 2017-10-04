import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;

export default class App extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Link to="/intheater/1">正在热映</Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/commingsoon/1">即将上映</Link>
        </Menu.Item>
        <Menu.Item key="rank">
          <Link to="/toplist/top250/1">榜单</Link>
        </Menu.Item>
        {this.props.children}
      </Menu>
    );
  }
}