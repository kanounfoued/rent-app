import ApiClient from "api/ApiClient";
import AddButton from "components/Button/AddButton";
import axiosInstance from "config/axios.config";
import { User } from "models/user.model";
import { useEffect } from "react";

const api = new ApiClient<User>(axiosInstance);

function App() {
  useEffect(() => {
    (async function name() {
      const { data } = await api.get("/users?size=10");
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <AddButton />
      <header>Learn React</header>
    </div>
  );
}

export default App;
