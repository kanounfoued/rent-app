import { Button } from "antd";
import { ButtonSize, ButtonType } from "antd/es/button";
import { CSSProperties, ReactNode } from "react";

type Props = {
  label?: string;
  type?: ButtonType;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string | undefined;
  style?: CSSProperties | undefined;
  onClick?: () => void;
  danger?: boolean;
};
export default function CustomButton({
  className,
  style,
  label,
  onClick,
  type = "default",
  size = "small",
  icon,
  danger,
}: Props) {
  return (
    <Button
      onClick={onClick}
      type={type}
      size={size}
      icon={icon}
      style={style}
      className={className}
      danger={danger}
    >
      {label}
    </Button>
  );
}
