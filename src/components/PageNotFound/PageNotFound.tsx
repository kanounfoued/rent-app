import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import ROUTES from 'routes/routes';

export default function PageNotFound() {
  const navigate = useNavigate();

  const onRedirect = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">PageNotFound</div>
      <Button onClick={onRedirect}>Back home</Button>
    </div>
  );
}
