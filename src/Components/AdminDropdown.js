import React from 'react'
import { useDispatch } from 'react-redux';
import { UserOutlined, DisconnectOutlined } from '@ant-design/icons';
import actions from '../Actions';
import { Dropdown, Space } from 'antd';
function AdminDropdown() {

    const dispatch = useDispatch();
    const onClick = ({ key }) => {
        if (key === 'Profile') console.log('Profile');
        if (key === 'Logout') dispatch(actions.admin.logout());
    };

    const items = [
        {
            key: 'Profile',
            label: 'Profile',
            icon: <UserOutlined />
        },
        {
            key: 'Logout',
            label: 'Logout',
            icon: <DisconnectOutlined />,
        }
    ];

    return (
        <Dropdown menu={{ items, onClick }} placement='bottom'>
            <Space>
                Admin
            </Space>
        </Dropdown>
    )
}

export default AdminDropdown