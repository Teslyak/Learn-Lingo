import { Formik, Form, ErrorMessage } from "formik";
import BaseModalWrap from "../WrapPopUp/WrapPopUp";
import {
  ButtonEye,
  ButtonSubmit,
  Discrp,
  ErrorMessageLogin,
  ErrorMessagePassword,
  Input,
  Title,
  WrapCloseBtn,
  WrapInput,
  WrapLogin,
} from "./LoginForm.styled";
import propTypes from "prop-types";
import * as yup from "yup";
import { CloseBtn } from "../../assets/icons/CloseBtn";
import { useState } from "react";
import { EyeOn } from "../../assets/icons/EyeOn";
import { EyeOff } from "../../assets/icons/EyeOff";
import { useDispatch } from "react-redux";
import { logining } from "../../../Redux/Auth/operations";
import { useAuth } from "../../../Hooks/use-auth";
import { Navigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};
const userSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      "Incorret email"
    )
    .required("Be sure to enter your email"),
  password: yup
    .string()
    .min(8, "Password must contain minimum 8 symbols")
    .max(64, "Password must contain maximum 64 symbols")
    .required("Be sure to enter your password"),
});

export const LoginForm = ({ onClose }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(logining({ value }));
    console.log(value);

    resetForm();
  };
  const FormikErrorMessage = ({ name }) => {
    switch (name) {
      case "email":
        return <ErrorMessage name={name} component={ErrorMessageLogin} />;
      case "password":
        return <ErrorMessage name={name} component={ErrorMessagePassword} />;
      default:
    }
  };

  return isLoggedIn ? (
    <Navigate to="//" />
  ) : (
    <BaseModalWrap onClose={onClose}>
      <WrapLogin>
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <WrapCloseBtn onClick={onClose}>
              <CloseBtn strokeWidth="2.5" />
            </WrapCloseBtn>
            <Title>Log In</Title>
            <Discrp>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </Discrp>
            <WrapInput>
              <Input type="text" name="email" placeholder="Email" />
              <FormikErrorMessage name="email" />
              <Input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                marginbottom="40px"
              />
              <FormikErrorMessage name="password" />
              <ButtonSubmit type="submit">Log In</ButtonSubmit>
              <ButtonEye
                type="button"
                onClick={() => {
                  setIsPasswordVisible(!isPasswordVisible);
                }}
              >
                {isPasswordVisible ? <EyeOn /> : <EyeOff />}
              </ButtonEye>
            </WrapInput>
          </Form>
        </Formik>
      </WrapLogin>
    </BaseModalWrap>
  );
};

LoginForm.propTypes = {
  onClose: propTypes.func.isRequired,
  name: propTypes.string,
};
