import React from "react";
import { useForm } from "react-hook-form";
import "./styles/ModalForm.css";

const ModalForm = ({ isShowModal, handleClickShowModal, createUser }) => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    createUser(data);
  };

  return (
    <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
      <form onSubmit={handleSubmit(submit)} className="modalForm__form">
        <h3 className="modalForm__title">New user</h3>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            First Name:
          </label>
          <input
            className="modalForm__input"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Last name
          </label>
          <input
            className="modalForm__input"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Email
          </label>
          <input
            className="modalForm__input"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Password
          </label>
          <input
            className="modalForm__input"
            type="password"
            {...register("password")}
          />
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Birthday
          </label>
          <input
            className="modalForm__input"
            type="date"
            {...register("birthday")}
          />{" "}
        </div>
        <i onClick={handleClickShowModal} className="modalForm__x bx bx-x"></i>
        <button className="modalForm__btn">Add user</button>
      </form>
    </section>
  );
};

export default ModalForm;
