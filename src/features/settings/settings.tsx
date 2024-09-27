import { Divider, Radio, RadioChangeEvent, Segmented, Typography } from 'antd';
import { useState } from 'react';

type SettingOption =
  | 'Account'
  | 'Password'
  | 'Notifications'
  | 'Payment method';

type ModeOption = 'Light' | 'Dark';

type LanguageOption = 'ar' | 'en';

const options: Array<SettingOption> = [
  'Account',
  'Password',
  'Notifications',
  'Payment method',
];

export default function Settings() {
  const [option, setOption] = useState<SettingOption>('Account');
  const [mode, setMode] = useState<ModeOption>('Light');
  const [language, setLanguage] = useState<LanguageOption>('en');

  const onChange = (option: SettingOption) => {
    setOption(option);
  };

  const onChangeMode = (e: RadioChangeEvent) => {
    const mode = e.target.value;
    document.documentElement.setAttribute('data-theme', mode.toLowerCase());
    setMode(mode);
  };

  const onChangeLanguage = (e: RadioChangeEvent) => {
    const language = e.target.value;
    setLanguage(language);
  };

  return (
    <div className="flex flex-col">
      <Typography.Title className="!mb-2 !text-4xl" level={1}>
        Settings
      </Typography.Title>
      <Typography.Text className="text-xs">
        Settings description
      </Typography.Text>

      <Divider />

      <Segmented<SettingOption>
        className="m-auto"
        options={options}
        value={option}
        onChange={onChange}
      />

      {/* change password */}
      {/* notifications */}
      {/* payment method */}

      <div className="grid grid-cols-1 gap-8 mt-8">
        {/* Mode */}
        <div className="p-4">
          <Typography.Title className="text-xl" level={3}>
            System mode
          </Typography.Title>
          <Typography.Text className="text-xs">
            System mode description
          </Typography.Text>

          <div className="flex my-8">
            <Radio.Group defaultValue={mode} onChange={onChangeMode}>
              <Radio.Button value="Light">Light</Radio.Button>
              <Radio.Button value="Dark">Dark</Radio.Button>
            </Radio.Group>
          </div>
        </div>

        {/* change language */}
        <div className="p-4">
          <Typography.Title className="text-xl" level={3}>
            System language
          </Typography.Title>
          <Typography.Text className="text-xs">
            System language description
          </Typography.Text>

          <div className="flex my-8">
            <Radio.Group defaultValue={language} onChange={onChangeLanguage}>
              <Radio.Button value="ar">Arabic</Radio.Button>
              <Radio.Button value="en">English</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
