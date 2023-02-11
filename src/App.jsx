import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClickShowModal = () => {
    setIsShowModal((IsShowModal) => !IsShowModal);
  };

  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`, data)
      .then(() => {
        getAllUsers();
        handleClickShowModal();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <NavBar handleClickShowModal={handleClickShowModal} />
      <ModalForm
        isShowModal={isShowModal}
        handleClickShowModal={handleClickShowModal}
        createUser={createUser}
      />
      <UsersList users={users} />
    </div>
  );
}

export default App;
