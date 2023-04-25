import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Form, Input, Layout, Modal, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Column from 'antd/es/table/Column';
import actions from '../Actions';
const { Content } = Layout;

function Users() {

    const users = useSelector(( state ) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.users.get());
    },[]);

    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    function showModal() {
        form.resetFields();
        setOpen(true);
    }
    function closeModal() {
        setOpen(false);
    }
    function addUser() {
        setOpen(false);
        dispatch(actions.users.add({ name: form.getFieldValue("name"), age: form.getFieldValue("age"), email: form.getFieldValue("email") }));
    }

    return (
        <Content style={{ padding: 30 }}>
            <div style={{ marginBottom: 16 }} wrappercol={{span: 16, offset: 1}}>
                <Button onClick={() => { showModal() }}>Add</Button>
                <Modal title="Add User" open={open} footer={null} closable={false} >
                    <Form form={form} name="AddUserForm" labelCol={{ span: 3 }} onFinish={addUser} autoComplete='off'>
                        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Input Name' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Age" name="age" rules={[{ required: true, message: "Input Age" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Input Email" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item wrappercol={{ offset: 16, span: 16 }} style={{ Space }}>
                            <Space size={"small"}>
                                <Button htmlType="button" onClick={closeModal}> Cancel </Button>
                                <Button type="primary" htmlType="submit"> Submit </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <Table dataSource={users}>
                <Column title="Name" dataIndex="name" key="Name" />
                <Column title="Age" dataIndex="age" key="Age" />
                <Column title="Email" dataIndex="email" key="Email" />
                <Column title="Action" dataIndex="" key='x' render={(_, data) => <Button onClick={() => (dispatch(actions.users.delete(data.name)))}>Delete</Button>} />
            </Table>
        </Content>

    )
}

export default Users