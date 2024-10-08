type Props = {
  height?: string;
  width?: string;
};

export default function TransactionIcon({
  height = '20px',
  width = '20px',
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      id="_x31_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <g>
        <polygon points="22,31.6 22,35.3 115.9,35.3 115.9,82.7 119.5,82.7 119.5,31.6" />
        <polygon points="15.3,42 109.2,42 109.2,89.4 112.8,89.4 112.8,38.4 15.3,38.4" />
        <path
          d="M23.9,45.4H8.5v15.4V81v15.4h15.4h66.7H106V81V60.8V45.4H90.6H23.9z M102,60.2v21.2c-5.3,1.4-9.4,5.6-10.9,11H23.3
		c-1.4-5.4-5.6-9.5-10.9-11V60.2c5.3-1.4,9.4-5.6,10.9-11h67.8C92.4,54.6,96.6,58.8,102,60.2z"
        />
        <circle cx="57.2" cy="70.9" r="18" />
      </g>
    </svg>
  );
}
