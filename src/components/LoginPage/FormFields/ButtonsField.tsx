import { Grid, Button } from "@mui/material";
import React from "react";

const ButtonsField = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      <Button sx={{ m: 1 }} type="submit" variant={"contained"} size={"large"}>
        Войти
      </Button>
      <Button sx={{ m: 1 }} type="submit" variant={"contained"} size={"large"}>
        Регистрация
      </Button>
    </Grid>
  );
};

export default ButtonsField;
