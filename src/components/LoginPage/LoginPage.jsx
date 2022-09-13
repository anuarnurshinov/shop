import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Button } from '@mui/material'
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const LoginPage = (props) => {
  const [values, setValues] = React.useState({
    login: '',
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl sx={{ mr: 1, mb: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Логин</InputLabel>
          <OutlinedInput
            onChange={handleChange('login')}
            id='login'
            type='text'
            value={values.login}
            label={'Логин'}
          />
        </FormControl>
        <FormControl sx={{ mr: 1, mb: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            id="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
      <Button variant={'contained'} size={'large'} > Войти </Button>
    </>

  )
}

export default LoginPage




