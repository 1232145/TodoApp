import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { axiosTodo } from './AxiosInstance';
import Error from './Error';

const { Title } = Typography;

const LoginPage = ({ setLogin }) => {
  const [err, setErr] = useState({ state: false, msg: "" });

  const onFinish = async (user) => {
    await axiosTodo.post('/login', user)
      .then(res => {
        localStorage.setItem('accessToken', res.data.access_token);
        setLogin(true);
      })
      .catch(error => setErr({ state: true, msg: error.message + ": Wrong credentials." }));
  };

  return (
    <>
      {
        err.state ?
          (
            <>
              <Error message={err.msg} setError={setErr}/>
            </>
          )
          :
          (
            <>
              <div className="login-container">
                <Card className="login-card">
                  <Title level={3} className="login-title">
                    Login
                  </Title>
                  <Form onFinish={onFinish}>
                    <Form.Item
                      name="username"
                      rules={[{ required: true, message: 'Please enter your username!' }]}
                    >
                      <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                      <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-button">
                        Log in
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div></>
          )
      }
    </>
  );
};

export default LoginPage;
