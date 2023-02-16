import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/ModalForm.css";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const ModalForm = ({
  isShowModal,
  handleClickShowModal,
  createUser,
  updatingUser,
  updateUser,
  setUpdatingUser,
}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const submit = (data) => {
    if (updatingUser) {
      updateUser(data, updatingUser.id);
    } else {
      createUser(data);
    }

    reset(defaultValues);
  };

  const handleClickClose = () => {
    handleClickShowModal();
    reset(defaultValues);
    setUpdatingUser();
  };

  useEffect(() => {
    if (updatingUser) {
      reset(updatingUser);
    }
  }, [updatingUser]);

  return (
    <section className={`modalForm ${isShowModal ? "activeForm" : ""}`}>
      <form onSubmit={handleSubmit(submit)} className="modalForm__form">
        <h3 className="modalForm__title">
          {updatingUser ? "Edit user" : "New user"}
        </h3>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            First Name:
          </label>
          <input
            className={`modalForm__input ${errors.first_name ? ' input__error' : ''}`}
            type="text"
            {...register("first_name", {
              required: 'This is field is requerid', maxLength: {
                value: 25,
                message: 'text is too long'
              }
            })}
          />
          {
            errors.first_name && <p className='modalForm__error' >{errors.first_name.message} </p>
          }
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Last name
          </label>
          <input
            className={`modalForm__input ${errors.last_name ? ' input__error' : ''}`}
            type="text"
            {...register("last_name", {
              required: 'This is field is requerid', maxLength: {
                value: 25,
                message: 'text is too long'
              }
            })}
          />
          {
            errors.last_name && <p className='modalForm__error' >{errors.last_name.message} </p>
          }

        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Email
          </label>
          <input
            className={`modalForm__input ${errors.email ? 'input__error ' : ''}`}
            type="email"
            {...register("email", {
              required: 'This is field is requerid',
              maxLength: {
                value: 150,
                message: 'email is too long'
              },
              pattern: {
                value: regexEmail,
                message: 'Thi is not a valid email'
              }
            })}
          />
          {
            errors.email && <p className='modalForm__error' >{errors.email.message} </p>
          }
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Password
          </label>
          <input
            className={`modalForm__input ${errors.password ? 'input__error ' : ''}`}
            type="password"
            {...register("password", {
              required: 'This is field is requerid', maxLength: {
                value: 128,
                message: 'Password is too long'
              }
            }
            )}
          />
          {
            errors.password && <p className='modalForm__error' >{errors.password.message} </p>
          }
        </div>
        <div className="modalForm__div">
          <label className="modalForm__label" htmlFor="">
            Birthday
          </label>
          <input
            className={`modalForm__input ${errors.birthday ? 'input__error ' : ''}`}
            type="date"
            {...register("birthday", {
              required: 'This is field is requerid',
            })}
          />
          {
            errors.birthday && <p className='modalForm__error' >{errors.birthday.message} </p>
          }
        </div>
        <i onClick={handleClickClose} className="modalForm__x bx bx-x"></i>
        <button className="modalForm__btn">
          {updatingUser ? "Save changes" : "Add new user"}
        </button>
      </form>
    </section>
  );
};

export default ModalForm;
