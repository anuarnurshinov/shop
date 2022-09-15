import * as React from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Button,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";

type propsType = {
  logInThunk: (data: any) => void;
};
export type loginDataType = {
  login: string;
  password: string;
};

const LoginPage: React.FC<propsType> = ({ logInThunk }) => {
  interface State {
    showPassword: boolean;
  }
  const [values, setValues] = React.useState<State>({
    showPassword: false,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  console.log(errors);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Grid container justifyContent="center">
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
          <OutlinedInput
            type={"text"}
            placeholder="Логин"
            {...register("login", {
              required: true,
              maxLength: 30,
              minLength: 6,
              pattern: {
                value: /^[a-z0-9_-]{3,16}$/,
                message: "Логин должен состоять из латиницы и цифр",
              },
            })}
          />
          {errors.login && <p>{`${errors.login.message}`}</p>}
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            {...register("password", {
              required: true,
              maxLength: 30,
              minLength: 6,
              pattern: {
                value: /^[a-z0-9_-]{3,16}$/,
                message: "Пароль должен состоять из латиницы и цифр",
              },
            })}
            type={values.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          {errors.password && <p>{`${errors.password.message}`}</p>}
        </FormControl>

        <Button type="submit" variant="contained">
          Отправить
        </Button>
      </FormControl>
    </Grid>
  );
};

export default LoginPage;
