import { Button, Form, Input, theme } from 'antd';
import { Link } from 'react-router-dom';
import { LoginFormSchema } from '../types/login.model';

const Login: React.FC = () => {
  const { colorPrimary } = theme.useToken().token;

  const [form] = Form.useForm();

  const onSubmit = (values: Partial<LoginFormSchema>) => {
    console.log('Success:', values);
  };

  return (
    <div className="w-[300px] flex flex-col items-center my-36 m-auto">
      <Form<LoginFormSchema>
        form={form}
        className="w-[300px]"
        name="login"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onSubmit}
        autoComplete="off"
        size="middle"
        variant="outlined"
      >
        <Form.Item<LoginFormSchema['username']>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'username is required!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<LoginFormSchema['password']>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'password is required!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: colorPrimary }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div className="w-full flex justify-between text-[#1677ff]">
        <Link to="/forgot-password">Forgot password</Link>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
