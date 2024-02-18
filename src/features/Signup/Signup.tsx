import { Button, Form, Input, Radio, theme } from 'antd';
import { UserRole } from 'models/user.model';
import { Link } from 'react-router-dom';
import { SignupFormSchema } from './types/signup.model';

const Signup: React.FC = () => {
  const { colorPrimary } = theme.useToken().token;

  const [form] = Form.useForm();

  const onSubmit = (values: Partial<SignupFormSchema>) => {
    console.log('Success:', values);
  };

  return (
    <div className="w-[300px] flex flex-col items-center my-36 m-auto">
      <h1 className="mb-8">Signup</h1>
      <Form<SignupFormSchema>
        form={form}
        className="w-[350px]"
        name="login"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onSubmit}
        autoComplete="off"
        size="middle"
        variant="outlined"
        initialValues={{
          role: 'tenant',
        }}
      >
        <Form.Item<SignupFormSchema['first_name']>
          label="First name"
          name="first_name"
          rules={[{ required: true, message: 'first name is required!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<SignupFormSchema['last_name']>
          label="Last name"
          name="last_name"
          rules={[{ required: true, message: 'last name is required!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<SignupFormSchema['email']>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'email is required!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<SignupFormSchema['password']>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'password is required!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<SignupFormSchema['confirm_password']>
          label="Confirmed password"
          name="confirm_password"
          rules={[
            { required: true, message: 'Confirmed password is required!' },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<SignupFormSchema['role']>
          label="Role"
          name="role"
          wrapperCol={{ offset: 0, span: 24 }}
        >
          <Radio.Group buttonStyle="solid">
            <Radio.Button value={UserRole.TENANT}>Tenant</Radio.Button>
            <Radio.Button value={UserRole.LANDLORD}>Landlord</Radio.Button>
            <Radio.Button value={UserRole.PR_MANAGER}>
              Property Manager
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ background: colorPrimary }}
          >
            Signup
          </Button>
        </Form.Item>
      </Form>

      <div className="w-full flex justify-between text-[#1677ff]">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
