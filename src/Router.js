import React, { Component } from 'react';
import { Router, Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { Layout } from 'antd';

// import asyncComponent from './AsyncComponent'
// const AsyncMaoNeng = asyncComponent(() => import('./module/index'))
// const AsyncPlMerchantEnter = asyncComponent(() => import('./module/PlatformBusiness/MerchantEnter'))


// 基于组件分割代码
import Loadable from 'react-loadable';
import Loading from './Loading';
const AsyncHome = Loadable({
  loader: () => import('./module/'), // 要按需加载的组件，用了import()函数
  loading: Loading,    // 一个无状态组件,负责显示"Loading中"
});

const AsyncTest = Loadable({
  loader: () => import('./test/'),
  loading: Loading,
});


const { Footer, Content } = Layout;

export default class Routers extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container-root">
        <Router history={this.props.history}>
          <Layout>
            <Content>
              <Switch>
                {/* 中文版本 */}
                <Route exact path='/' component={AsyncHome} />
                <Route exact path='/home' component={AsyncHome} />
                <Route exact path='/test' component={AsyncTest} />

                <Redirect exact strict from="/*" to="/" />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </div>
    )
  }
}