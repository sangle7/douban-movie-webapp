import React from 'react'
import { Menu, Dropdown, Icon, message } from 'antd';
const onClick = e => {
  console.log(e.target)
  console.log(e.target.att)
};

const menu = (
  <section>
    <a onClick={onClick} att="深圳">深圳</a>
    <a>北京</a>
    <a>上海</a>
    <a>广州</a>
  </section>
);

const CityDropDown = () =>(
  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
      Hover me <Icon type="down" />
    </a>
  </Dropdown>)

export default CityDropDown