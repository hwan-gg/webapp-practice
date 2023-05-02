import React from 'react'
import { Form, Input, Button, Typography } from 'antd'
import { Content } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import actions from '../../Actions';

const { Title } = Typography;

function Login() {
    
    const dispatch = useDispatch();
    
    const onFinish = (values) => {
        dispatch(actions.admin.login(values));
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Content style={{ justifyContent: "center" }}>
            <Title style={{ marginLeft: '42%', paddingTop: '5%' }}>Login</Title>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    margin: 'auto',
                    maxWidth: 400,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />          
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Content>
    )
}

export default Login