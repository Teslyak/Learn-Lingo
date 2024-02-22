import { Formik, Form } from "formik";
import BaseModalWrap from "../WrapPopUp/WrapPopUp";
import {
  ButtonSubmit,
  Discrp,
  Input,
  Title,
  WrapCloseBtn,
  WrapLogin,
} from "./LoginForm.styled";
import propTypes from "prop-types";
import * as yup from "yup";
import { CloseBtn } from "../../assets/icons/CloseBtn";

const initialValues = {
  login: "",
  password: "",
};
const userSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

export const LoginForm = ({ onClose }) => {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
  };

  return (
    <BaseModalWrap onClose={onClose}>
      <WrapLogin>
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <WrapCloseBtn onClick={onClose}>
              <CloseBtn />
            </WrapCloseBtn>
            <Title>Log In</Title>
            <Discrp>
              Welcome back! Please enter your credentials to access your account
              and continue your search for an teacher.
            </Discrp>
            <Input type="text" name="login" placeholder="Email" />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              marginbottom="40px"
            />
            <ButtonSubmit type="submit">Log In</ButtonSubmit>
          </Form>
        </Formik>
      </WrapLogin>
    </BaseModalWrap>
  );
};

LoginForm.propTypes = {
  onClose: propTypes.func.isRequired,
};
