import ApiClient from 'api/ApiClient';
import axiosInstance from 'config/axios.config';
import { User } from 'models/user.model';

const api = new ApiClient<User>(axiosInstance);

function App() {
  // useEffect(() => {
  //   (async function name() {
  //     const { data } = await api.get("/users?size=10");
  //     console.log(data);
  //   })();
  // }, []);

  return <div />;
}

export default App;
