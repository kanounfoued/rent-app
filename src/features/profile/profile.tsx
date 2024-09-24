import {
  Avatar,
  Divider,
  Form,
  GetProp,
  Input,
  Typography,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import UserIcon from 'assets/icons/UserIcon';
import { useState } from 'react';
import styled from 'styled-components';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const StyledUploader = styled(Upload)`
  & .ant-upload-list-item-container {
    height: 150px !important;
    width: 150px !important;
    margin: auto !important;
  }

  & .ant-upload-list-item {
    padding: 0 !important;
    border: 0px !important;
  }
`;

export default function Profile() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const handlePreview = async (file: UploadFile) => {
    if (!file?.url && !file?.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file?.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <div className="flex flex-col">
      <Typography.Title className="!mb-2 !text-4xl" level={1}>
        Profile
      </Typography.Title>
      <Typography.Text className="text-xs">Profile description</Typography.Text>

      <Divider />

      <div className="grid grid-cols-1 gap-8">
        <div className="col-span-1">
          <StyledUploader
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-circle"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            itemRender={(_, file) => {
              console.log(_);

              return (
                <div className="ant-upload-list-item ant-upload-list-item-done">
                  <Avatar src={file.url} className="h-full w-full" />
                </div>
              );
            }}
          >
            {fileList.length > 0 ? null : (
              <button
                className="flex flex-col items-center bg-none border-0"
                type="button"
              >
                <UserIcon height="40px" width="40px" />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            )}
          </StyledUploader>
        </div>

        <div className="w-[400px] mx-auto">
          <Form size="middle">
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
            <Form.Item>
              <Input />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
