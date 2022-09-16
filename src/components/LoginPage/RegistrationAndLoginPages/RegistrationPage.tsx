import * as React from "react"
import { Button, FormControl, Grid } from "@mui/material"
import { propsOfLoginAndRegistrationPagesType } from "../LoginPageTypes"
import FormField from "./FormFields/FormField"

const RegistrationPage: React.FC<propsOfLoginAndRegistrationPagesType> = ({
  handleSubmit,
  onSubmit,
  fieldProperties,
  handleClickShowPassword,
  handleMouseDownPassword,
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
          fieldProperties={fieldProperties.name}
        />
        <FormField
          common={fieldProperties.common}
          fieldProperties={fieldProperties.surname}
        />

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

        <Button disableElevation type="submit" variant="contained">
          Сохранить
        </Button>
      </FormControl>
    </Grid>
  )
}

export default RegistrationPage
