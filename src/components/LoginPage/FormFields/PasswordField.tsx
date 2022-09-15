import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import * as React from "react";
import { valuesForLoginInputsType } from "./LoginField";

type propsType = {
  errors: any;
  register: any;
  handleChange: (arg: string) => any;
  values: valuesForLoginInputsType;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: any) => void;
};

const PasswordField: React.FC<propsType> = ({
  errors,
  register,
  handleChange,
  values,
  handleClickShowPassword,
  handleMouseDownPassword,
}) => {
  return (
    <FormControl sx={{ mr: 1, mb: 1, width: "29ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
      <OutlinedInput
        {...(register("password"),
        {
          required: true,
          value: values.password,
          onChange: handleChange("password"),
          id: "password",
          type: values.showPassword ? "text" : "password",
        })}
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
  );
};

export default PasswordField;
