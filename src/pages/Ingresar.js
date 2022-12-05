import React from 'react'
import { Button, Checkbox, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { SaveTwoTone } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom'
const {Title,Text}=Typography

export const Ingresar = () => {

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    navigate('/escritorio')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <Title level={2}>Ingresar</Title>
    <Text> Ingrese su nombre y numero de Escritorio</Text>
    <Divider/>
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre del agente"
        name="agente"
        rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Escritorio"
        name="escritorio"
        rules={[{ required: true, message: 'Ingrese el numero de escritorio' }]}
      >
        <InputNumber min={1} max={99} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit" shape='round'>
        <SaveTwoTone />
          Ingresar
        </Button>
      </Form.Item>
    </Form>
    </>
  )
}
