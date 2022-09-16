import { FormEventHandler } from "react"
import { UseFormRegister, FieldValues } from "react-hook-form"

export type loginDataType = {
  login: string
  password: string
  name?: string | undefined
  surname?: string | undefined
}
export type formValuesState = {
  showPassword?: boolean
}
export type fieldPropertiesType = {
  titleEng: string
  titleRus: string
  regExp: RegExp
}
export type commonFieldPropsType = {
  register: UseFormRegister<FieldValues>
  errors: any
  values: formValuesState
}

export type listOfFieldsType = {
  common: commonFieldPropsType
  name?: fieldPropertiesType | undefined
  surname?: fieldPropertiesType | undefined
  login?: fieldPropertiesType | undefined
  password?: fieldPropertiesType | undefined
}

export type propsOfLoginAndRegistrationPagesType = {
  handleSubmit: (arg: () => void) => FormEventHandler
  fieldProperties: listOfFieldsType
  handleClickShowPassword: () => void
  handleMouseDownPassword: (event: any) => void
  onSubmit: (data?: loginDataType) => void
}
