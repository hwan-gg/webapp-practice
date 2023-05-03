import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Input, Layout, Modal, Space, Table, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Column from "antd/es/table/Column";
import actions from "../../Actions";
const { Content } = Layout;
const { Title } = Typography;

function Users() {
  const users = useSelector((state) => state.users).map((u) => {
    u.key = u.name;
    return u;
  });
  const authenticated = useSelector((state) => state.authenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.users.get());
  }, [dispatch]);

  const [addOpen, setAddOpen] = useState(false);
  const [failOpen, setFailOpen] = useState(false);
  const [form] = Form.useForm();

  function openAdd() {
    form.resetFields();
    setAddOpen(true);
  }
  function openFail() {
    setFailOpen(true);
  }
  function closeAdd() {
    setAddOpen(false);
  }
  function closeFail() {
    setFailOpen(false);
  }
  function addUser() {
    setAddOpen(false);
    dispatch(
      actions.users.add({
        name: form.getFieldValue("name"),
        email: form.getFieldValue("email"),
        password: form.getFieldValue("password"),
      })
    );
  }

  return (
    <Content style={{ padding: 30 }}>
           <Space style={{display: 'flex', justifyContent: 'center'}}>
          <Title> Users </Title>
        </Space>
      <div style={{ marginBottom: 16 }} wrappercol={{ span: 16, offset: 1 }}>
 
        <Button
          onClick={() => {
            authenticated ? openAdd() : openFail();
          }}
          style={{marginLeft: 'auto'}}
        >
          Add
        </Button>
        <Modal title="Add User" open={addOpen} footer={null} closable={false}>
          <Form
            form={form}
            name="AddUserForm"
            labelCol={{ span: 4 }}
            onFinish={addUser}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Input Name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Input Email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Input Password" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrappercol={{ offset: 16, span: 16 }} style={{ Space }}>
              <Space size={"small"}>
                <Button htmlType="button" onClick={closeAdd}>
                  {" "}
                  Cancel{" "}
                </Button>
                <Button type="primary" htmlType="submit">
                  {" "}
                  Submit{" "}
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
        <Modal open={failOpen} onCancel={closeFail} footer={null}>
          <h1> Need to Login! </h1>
        </Modal>
      </div>
      <Table
        dataSource={users}
        style={{ boxShadow: "0 0 20px 1px rgba(0, 0, 0, 0.1)" }}
        pagination={{pageSize : 15, showSizeChanger: false, onChange:() => {window.scrollTo({top: 0, behavior: 'smooth'});}}}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Password" dataIndex="password" key="password" />
        <Column
          title="Action"
          dataIndex=""
          key="x"
          render={(_, data) => (
            <Button
              onClick={() =>
                authenticated
                  ? dispatch(actions.users.delete(data.name))
                  : openFail()
              }
            >
              Delete
            </Button>
          )}
        />
      </Table>
    </Content>
  );
}

export default Users;
