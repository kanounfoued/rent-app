import { Button } from "antd";

type Props = {
  label: string;
  onClick?: () => void;
};
export default function AddButton({ label, onClick }: Props) {
  return <Button onClick={onClick}>{label}</Button>;
}
