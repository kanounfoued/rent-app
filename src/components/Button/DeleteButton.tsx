import { ButtonSize, ButtonType } from "antd/es/button";
import { ReactNode } from "react";
import CustomButton from "./CustomButton";

type Props = {
  type?: ButtonType;
  size?: ButtonSize;
  icon?: ReactNode;
  onClick?: () => void;
};
export default function DeleteButton({
  onClick,
  type = "default",
  size = "small",
  icon,
}: Props) {
  return (
    <CustomButton
      label="Delete"
      onClick={onClick}
      type={type}
      size={size}
      icon={icon}
    />
  );
}
