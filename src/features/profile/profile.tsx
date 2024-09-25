import {
  Avatar,
  Button,
  Divider,
  Form,
  Input,
  message,
  Typography,
  Upload,
  UploadProps,
} from 'antd';
import UploadIcon from 'assets/icons/UploadIcon';
import { User } from 'models/user.model';

const props: UploadProps = {
  name: 'profile-picture',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function Profile() {
  return (
    <div className="flex flex-col">
      <Typography.Title className="!mb-2 !text-4xl" level={1}>
        Profile
      </Typography.Title>
      <Typography.Text className="text-xs">Profile description</Typography.Text>

      <Divider />

      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col items-center gap-4 col-span-1">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            size={180}
          />
          <Upload {...props}>
            <Button icon={<UploadIcon />}>Upload</Button>
          </Upload>
        </div>

        <div className="w-[400px] mx-auto">
          <Form<User>
            size="middle"
            layout="vertical"
            initialValues={{
              first_name: 'Mohamed Fouad',
              last_name: 'Kanoun',
              email: 'foued.kanoun@gmail.com',
              mobile: '0508882321',
            }}
          >
            <Form.Item
              name="first_name"
              label="First name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="last_name" label="Last name">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input placeholder="email" />
            </Form.Item>
            <Form.Item name="mobile" label="Mobile">
              <Input />
            </Form.Item>

            <Form.Item className="flex justify-center">
              <Button htmlType="submit" type="primary">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
