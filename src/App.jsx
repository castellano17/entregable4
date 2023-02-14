import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import { Alert, message } from 'antd';

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  const [users, setUsers] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [updatingUser, setUpdatingUser] = useState();

  const handleClickShowModal = () => {
    setIsShowModal((IsShowModal) => !IsShowModal);
  };

  const createUser = (data) => {
    axios
      .post(`${BASE_URL}users/`, data)
      .then(() => {
        getAllUsers();
        handleClickShowModal();
        message.success('El usuario ha sido creado con éxito')
      })
      .catch((err) => {
        console.log(err)
        message.error('Ha ocurrido un error al crear el usuario');
      })
  };

  const getAllUsers = () => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(`${BASE_URL}users/${id}/`)
      .then(() => {
        getAllUsers()
        message.success('El usuario ha sido eliminado con éxito')
      })
      .catch((err) => {
        console.log(err)
        message.error('Ha ocurrido un error al eliminar el usuario');
      })
  };

  const updateUser = (data, id) => {
    axios
      .patch(`${BASE_URL}users/${id}/`, data)
      .then(() => {
        getAllUsers();
        handleClickShowModal();
        message.success('El usuario ha sido editado con éxito')
      })
      .catch((err) => {
        console.log(err)
        message.error('Ha ocurrido un error al editar el usuario');


      })
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
        updatingUser={updatingUser}
        updateUser={updateUser}
        setUpdatingUser={setUpdatingUser}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        setUpdatingUser={setUpdatingUser}
        handleClickShowModal={handleClickShowModal}
      />
    </div>
  );
}

export default App;
