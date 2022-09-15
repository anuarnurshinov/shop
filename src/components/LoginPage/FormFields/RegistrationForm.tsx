import * as React from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <InputLabel htmlFor="outlined-adornment-login">Login</InputLabel>
        <OutlinedInput
          type={"text"}
          placeholder="Логин"
          {...register("login", {
            required: true,
            maxLength: 30,
            minLength: 6,
            pattern: /^[a-z0-9_-]{3,16}$/,
          })}
        />
        {errors.login && <p>This is required</p>}
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          type={values.showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment
              {...register("password", {
                required: true,
                maxLength: 30,
                minLength: 6,
                pattern: /^[A-z0-9_-]{3,16}$/,
              })}
              position="end"
            >
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

        {errors.password && <p>This is required</p>}
      </FormControl>

      <input type="submit" />
    </form>
  );
};

export default RegistrationForm;
