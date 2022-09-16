import { connect } from "react-redux/"
import {
  logInThunk,
  registerThunk,
} from "../../redux/reducers/loginPageReducer"
import LoginPage from "./RegistrationAndLoginPages/LoginPage"
import { Navigate, useMatch } from "react-router-dom"
import RegistrationPage from "./RegistrationAndLoginPages/RegistrationPage"
import React from "react"
import { useForm } from "react-hook-form"
import { formValuesState, listOfFieldsType } from "./LoginPageTypes"
import Loader from "../../common/Loader"

interface propsType {
  logInThunk: (data: any) => void
  isAuth: boolean
  isFetching: boolean
  registerThunk: (data: any) => void
}

const LoginPageContainer: React.FC<propsType> = ({
  logInThunk,
  isAuth,
  isFetching,
  registerThunk,
}) => {
  const [values, setValues] = React.useState<formValuesState>({
    showPassword: false,
  })

  const match = useMatch("login")

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  })

  const onSubmit = (data: any) => {
    if (match) {
      logInThunk(data)
      reset()
      return
    }

    registerThunk(data)
    reset()
    return
  }

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  const fieldProperties: listOfFieldsType = {
    common: {
      register,
      errors,
      values,
    },
    login: {
      titleEng: "login",
      titleRus: "Логин",
      regExp: /^[A-z0-9_-]{3,16}$/,
    },
    name: {
      titleEng: "name",
      titleRus: "Имя",
      regExp: /^[А-я]{3,16}$/,
    },
    password: {
      titleEng: "password",
      titleRus: "Пароль",
      regExp: /^[A-z0-9_-]{3,16}$/,
    },
    surname: {
      titleEng: "surname",
      titleRus: "Фамилия",
      regExp: /^[А-я]{3,16}$/,
    },
  }

  if (isFetching) {
    ;<Loader />
  }
  if (isAuth) {
    return <Navigate to="/" replace={true} />
  }

  if (match) {
    return (
      <LoginPage
        handleSubmit={handleSubmit}
        handleClickShowPassword={handleClickShowPassword}
        handleMouseDownPassword={handleMouseDownPassword}
        fieldProperties={fieldProperties}
        onSubmit={onSubmit}
      />
    )
  }
  return (
    <RegistrationPage
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      fieldProperties={fieldProperties}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
    />
  )
}

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.loginPage.isAuth,
    isFetching: state.loginPage.isFetching,
  }
}

const mapDispatchToProps = {
  logInThunk,
  registerThunk,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer)
