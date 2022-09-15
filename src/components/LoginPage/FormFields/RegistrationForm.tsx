import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Логин"
          {...register("login", {
            required: true,
            maxLength: 30,
            minLength: 6,
            pattern: /^[a-z0-9_-]{3,16}$/,
          })}
        />
        {errors.login && <p>This is required</p>}
      </div>

      <div>
        <input
          placeholder="Пароль"
          {...register("password", {
            required: true,
            maxLength: 30,
            minLength: 6,
            pattern: /^[A-z0-9_-]{3,16}$/,
          })}
        />
        {errors.password && <p>This is required</p>}
      </div>

      <input type="submit" />
    </form>
  );
};

export default RegistrationForm;
