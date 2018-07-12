import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { contact } from '../../static/images/'
import './index.less';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Row className="footer">
        <Col>这是footer</Col>
      </Row>
    )
  }
}

export default Footer;