import * as React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

type propsType = {
  errors: any;
  register: any;
  handleChange: (arg: string) => any;
  values: valuesForLoginInputsType;
};

export type valuesForLoginInputsType = {
  login: string;
  password: string;
  showPassword: boolean;
};

const LoginField: React.FC<propsType> = ({
  errors,
  register,
  handleChange,
  values,
}) => {
  console.log(errors);

  return (
    <FormControl sx={{ mr: 1, mb: 1, width: "29ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Логин</InputLabel>
      <OutlinedInput
        {...(register("login"),
        {
          required: true,
          id: "login",
          type: "text",
          label: "Логин",
          inputComponent: "input",
          onChange: handleChange("login"),
        })}
        value={values.login}
      />
    </FormControl>
  );
};

export default LoginField;
