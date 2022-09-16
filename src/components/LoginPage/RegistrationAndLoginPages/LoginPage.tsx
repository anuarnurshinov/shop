import * as React from "react"
import { Button, FormControl, Grid } from "@mui/material"
import FormField from "./FormFields/FormField"
import { propsOfLoginAndRegistrationPagesType } from "../LoginPageTypes"

const LoginPage: React.FC<propsOfLoginAndRegistrationPagesType> = ({
  handleSubmit,
  handleClickShowPassword,
  handleMouseDownPassword,
  fieldProperties,
  onSubmit,
}) => {
  return (
    <Grid container justifyContent="center">
      <FormControl
        component={"form"}
        sx={{ width: 1 / 4 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          common={fieldProperties.common}
          fieldProperties={fieldProperties.login}
        />
        <FormField
          common={fieldProperties.common}
          handleClickShowPassword={handleClickShowPassword}
          handleMouseDownPassword={handleMouseDownPassword}
          fieldProperties={fieldProperties.password}
        />

        <Button sx={{ mb: 1 }} type="submit" variant="contained">
          Войти
        </Button>
      </FormControl>
    </Grid>
  )
}

export default LoginPage
