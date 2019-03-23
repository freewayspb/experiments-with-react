import React, {Component} from 'react';
import { Layout } from 'antd';

class BaseLayout extends Component {
  render() {
    return (
      <Layout>
        <Layout.Sider>Sider</Layout.Sider>
        <Layout>
          <Layout.Header>Header</Layout.Header>
          <Layout.Content>Content</Layout.Content>
          <Layout.Footer>Footer</Layout.Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout;
