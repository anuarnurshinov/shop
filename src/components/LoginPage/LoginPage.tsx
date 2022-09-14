import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Button,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "react-router-dom";

type propsType = {
  isAuth: boolean;
  logInThunk: (data: loginDataType) => void;
};

export interface loginDataType {
  login: string;
  password: string;
}

const LoginPage: React.FC<propsType> = ({ isAuth, logInThunk }) => {
  const { register, handleSubmit } = useForm<loginDataType>();
  const onSubmit: SubmitHandler<loginDataType> = (data) => {
    console.log(data);
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
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl sx={{ mr: 1, mb: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Логин</InputLabel>
            <OutlinedInput
              {...register("login")}
              onChange={handleChange("login")}
              id="login"
              type="text"
              value={values.login}
              label={"Логин"}
            />
          </FormControl>
          <FormControl sx={{ mr: 1, mb: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Пароль
            </InputLabel>
            <OutlinedInput
              {...register("password")}
              onChange={handleChange("password")}
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Пароль"
            />
          </FormControl>
        </Box>
        <Button type="submit" variant={"contained"} size={"large"}>
          {" "}
          Войти{" "}
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
