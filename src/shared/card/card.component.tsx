import React from "react";
import { useForm } from "react-hook-form";
import { Button, Card as AntdCrad, Input, Space, Form } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";

function Card() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values: any) => console.log(values);

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <AntdCrad title="Login" className="text-center text-dark bg-light">
        <Form onSubmitCapture={handleSubmit(onSubmit)}>
          <Form.Item label="Email">
            <Input className="mb-3" type="email" {...register("email")} />
          </Form.Item>
          <Form.Item label="password">
            <Space direction="vertical">
              <Input.Password
                placeholder="input password"
                className="w-100"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                {...register("password")}
              />
            </Space>
          </Form.Item>
          <Form.Item className="mb-0">
            <Button htmlType="submit" type="primary" className="mt-3">
              Login
            </Button>
          </Form.Item>
        </Form>
      </AntdCrad>
    </div>
  );
}

export default Card;
