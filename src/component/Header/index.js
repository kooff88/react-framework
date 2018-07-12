import React, { Component } from 'react';
import { Divider, Button, Tag, Menu } from 'antd';

import './index.less';

const SubMenu = Menu.SubMenu;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderNavSecond = (child) => {
    console.log('child', child)
    return child.map((item, index) => {
      return (
        <span className="second-li" key={index}>
          <a href="#">{item}</a>
          <Divider type="vertical" />
        </span>
      )
    })
  }


  // 选择导航
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    let path = '/'
    switch (e.key) {
      case '0': this.props.history.push('/'); break;
      case '1': this.props.history.push('/conference-introduce'); break;
      case '2': this.props.history.push('/conference-news'); break;
      case '3': this.props.history.push('/merchant-introduce'); break;
      case '4': this.props.history.push('/merchant-service'); break;
      case '5': this.props.history.push('/merchant-enter'); break;
      case '6': this.props.history.push('/news-industry'); break;
      case '7': this.props.history.push('/news-platform'); break;
      case '8': this.props.history.push('/news-conference'); break;
      case '9': this.props.history.push('/policy-laws'); break;
      case '10': this.props.history.push('/policy-rights'); break;
      case '11': this.props.history.push('/contact-us'); break;
      default: break;
    }
  }

  componentDidMount() {
    const pathname = this.props.history.location.pathname ? this.props.history.location.pathname : '/'
    let key = '';
    switch (pathname) {
      case '/': this.setState({ current: '0' }); this.props.history.push(pathname); break;
      case '/conference-introduce': this.setState({ current: '1' }); this.props.history.push(pathname); break;
      case '/conference-news': this.setState({ current: '2' }); this.props.history.push(pathname); break;
      case '/merchant-introduce': this.setState({ current: '3' }); this.props.history.push(pathname); break;
      case '/merchant-service': this.setState({ current: '4' }); this.props.history.push(pathname); break;
      case '/merchant-enter': this.setState({ current: '5' }); this.props.history.push(pathname); break;
      case '/news-industry': this.setState({ current: '6' }); this.props.history.push(pathname); break;
      case '/news-platform': this.setState({ current: '7' }); this.props.history.push(pathname); break;
      case '/news-conference': this.setState({ current: '8' }); this.props.history.push(pathname); break;
      case '/policy-laws': this.setState({ current: '9' }); this.props.history.push(pathname); break;
      case '/policy-rights': this.setState({ current: '10' }); this.props.history.push(pathname); break;
      case '/contact-us': this.setState({ current: '11' }); this.props.history.push(pathname); break;
      default: break;
    }
  }

  getPage = () => {

  }

  render() {
    const { current } = this.state;
    return (
      <div className="header">
        <div className="top">
          <div className="logo">
            {/* <img src={logo} alt="" width={124} height={44} /> */}
          </div>
          <div className="desc"><span>欢迎来到</span>&nbsp;&nbsp;&nbsp;&nbsp;贸能通（中国国际进口博览会综合服务平台）</div>
          <div className="ch-en">
            <span onClick={() => { this.props.history.push('/') }}>中文</span>
            <Divider type="vertical" />
            <span onClick={() => { this.props.history.push('/en-maoneng') }}>EN</span>
          </div>
        </div>

        <div className="nav">
          <div className="nav-1">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              className="nav-menu"
            >
              <Menu.Item key="0" onClick={this.getPage}>首页</Menu.Item>
              <SubMenu title={<span>走进进博会</span>}>
                <Menu.Item key="1" onClick={this.getPage}>进博会</Menu.Item>
                <Menu.Item key="2" onClick={this.getPage}>热点聚焦</Menu.Item>
              </SubMenu>
              <SubMenu title={<span>平台业务</span>}>
                <Menu.Item key="3">贸能通</Menu.Item>
                <Menu.Item key="4">提供服务</Menu.Item>
                <Menu.Item key="5">入驻商家</Menu.Item>
              </SubMenu>
              <SubMenu title={<span>新闻资讯</span>}>
                <Menu.Item key="6">行业新闻</Menu.Item>
                <Menu.Item key="7">平台动态</Menu.Item>
                <Menu.Item key="8">展会活动</Menu.Item>
              </SubMenu>
              <SubMenu title={<span>政策法规</span>}>
                <Menu.Item key="9">政策新闻</Menu.Item>
                <Menu.Item key="10">知识产权</Menu.Item>
              </SubMenu>
              <Menu.Item key="11">联系我们</Menu.Item>
            </Menu>
          </div>
          <div className="nav-2"></div>
        </div>
      </div>
    )
  }
}

export default Header;