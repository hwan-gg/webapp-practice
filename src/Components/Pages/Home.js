import React from 'react'
import { Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';

const { Title } = Typography;

function Home() {

  return (
    <Content style={{ padding: 30 }}>
      <div className='Home' style={{ minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Title> HELLO </Title>
      </div>
    </Content>
  )
}

export default Home