import React, { Component } from 'react'
// 引入组件和样式文件
import {Button,DatePicker} from 'antd'
import {WechatOutlined,QqOutlined,SearchOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'
const {RangePicker} = DatePicker;
export default class App extends Component {
  onChange = (date,dateString)=>{
    console.log(date,dateString);
  }
  render() {
    const {onChange} = this;
    return (
      <div>
        <h3>App</h3>
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <Button>Primary Button</Button>
        <Button type="dashed">Primary Button</Button>
        <WechatOutlined />
        <QqOutlined />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>

        <DatePicker onChange={onChange}/>
        <RangePicker></RangePicker>
      </div>
    )
  }
}
