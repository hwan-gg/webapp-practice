import React from 'react'
import { Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';

const { Title } = Typography;

function Home() {

  return (
    <Content style={{ padding: 30, height: '85vh' }}>
      <div className='Home' style={{ minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Title> MFLIX </Title>
      </div>
    </Content>
  )
}

export default Home