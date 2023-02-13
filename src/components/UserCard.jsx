import React from "react";
import "./styles/UserCard.css";

const UserCard = ({
  user,
  deleteUser,
  setUpdatingUser,
  handleClickShowModal,
}) => {
  const handleClickEdit = () => {
    setUpdatingUser(user);
    handleClickShowModal();
  };
  return (
    <article className="UserCard">
      <h3 className="UserCard__name">
        {user.first_name} {user.last_name}
      </h3>
      <hr />
      <ul className="UserCard__item">
        <li className="UserCard__email">
          <span>Email:</span>
          {user.email}
        </li>
        <li className="UserCard__birthday">
          <span>Birthday:</span> <i className="bx bx-gift"></i>
          {user.birthday}
        </li>
      </ul>
      <hr className="UserCard__line" />
      <footer className="UserCard__btn-container">
        <button
          className="UserCard__btn-erase"
          onClick={() => deleteUser(user.id)}
        >
          <i className="bx bx-trash"></i>
        </button>

        <button className="UserCard__btn-edit" onClick={handleClickEdit}>
          <i className="bx bx-pencil"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
