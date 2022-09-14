import * as React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

type propsType = {
  register: any;
  handleChange: (arg: string) => void;
  values: valuesForLoginInputsType;
};

export type valuesForLoginInputsType = {
  login: string;
  password: string;
  showPassword: boolean;
};

const LoginField: React.FC<propsType> = ({
  register,
  handleChange,
  values,
}) => {
  return (
    <FormControl sx={{ mr: 1, mb: 1, width: "29ch" }} variant="outlined">
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
  );
};

export default LoginField;
