import { Grid, Typography } from "@mui/material";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "react-router-dom";
import ButtonsField from "./FormFields/ButtonsField";
import LoginField from "./FormFields/LoginField";
import PasswordField from "./FormFields/PasswordField";

type propsType = {
  logInThunk: (data: loginDataType) => void;
};

export interface loginDataType {
  login: string;
  password: string;
}

const LoginPage: React.FC<propsType> = ({ logInThunk }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<loginDataType>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<loginDataType> = (data) => {
    logInThunk(data);
  };

  const [values, setValues] = React.useState({
    login: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" sx={{ m: 3 }}>
            Вход или регистрация
          </Typography>

          <LoginField
            register={register}
            handleChange={handleChange}
            values={values}
            errors={errors}
          />

          <PasswordField
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            register={register}
            handleChange={handleChange}
            values={values}
            errors={errors}
          />

          <ButtonsField />
        </Grid>
      </Form>
    </>
  );
};

export default LoginPage;
