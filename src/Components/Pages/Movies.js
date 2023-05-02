import React from 'react'
import { Grid, Space, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';

const { Title } = Typography;
function Movies() {
  return (
    <Content style={{ padding: 30 }}>
      <div className='Movies' style={{ minHeight: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Space>
          <Title> Movies </Title>
        </Space>
        {/* <Grid>

        </Grid> */}
      </div>
    </Content>
  )
}

export default Movies