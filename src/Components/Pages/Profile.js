import { Content } from 'antd/es/layout/layout'
import Title from 'antd/es/typography/Title';
import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

  const profile = useSelector(state => state.userProfile);

  return (
    <Content style={{height: '85vh'}}>
      <div style={{display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center'}}>
        <Title> <div>Welcome {profile.username}</div> </Title>
        <div>User Since: {new Date(profile.userSince).toLocaleDateString("en-US")}</div>
        <div>Age: {profile.age}</div>
      </div>
    </Content>
  )
}

export default Profile