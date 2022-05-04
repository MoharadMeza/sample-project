import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card as AntdCrad, Input, Form, Checkbox, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginForm } from "./models/login";
import { actions } from "../AuthRedux";
import { login } from "../AuthCRUD";

function Login() {
  const dispatch = useDispatch();
  message.config({});
  const onSubmit = ({ email, password }: LoginForm) => {
    console.log(email, password);
    login({ email: email, password: password })
      .then(({ data }) => {
        dispatch(actions.login(data.token));
        message.success("Welcome");
      })
      .catch(() => message.error("Login detail is incorrect !"));
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <AntdCrad title="Login" className="text-dark bg-light">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            className="mb-3"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            className="mb-3"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button me-2"
            >
              Log in
            </Button>
            Or <a href=""> register now!</a>
          </Form.Item>
        </Form>
      </AntdCrad>
    </div>
  );
}

export default Login;
