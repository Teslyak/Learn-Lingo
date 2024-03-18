import { Form, Formik } from 'formik';
import BaseModalWrap from '../WrapPopUp/WrapPopUp';
import {
  Group,
  ModalWrap,
  StyleRadio,
  StyleInput,
  ErrorMsg,
  BtnSubmit,
  Title,
  Discrp,
  AvatarTeacher,
  WrapTeacher,
  YourTeacher,
  NameTeacher,
  TitleReason,
  WrapCloseBtn,
} from './ModalTrialLesson.styled';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { selectCard } from '../../Redux/Catalog/selectors';
import toast from 'react-hot-toast';
import { CloseBtn } from '../../assets/icons/CloseBtn';
const initialValues = {
  reason: '',
  name: '',
  email: '',
  phone: '',
};

const userSchema = yup.object().shape({
  reason: yup.string().required('Please choose a reason for learning English'),
  name: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .max(30, 'Maximum 30 characters')
    .required('Required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Fill in the mandatory email field'),
  phone: yup
    .string()
    .required('This is a required field')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and dashes.'
    ),
});
export const ModalTrialLesson = ({ onClose }) => {
  const { avatar_url, name, surname } = useSelector(selectCard);
  const handleSubmit = (value, { resetForm }) => {
    toast.success('Trial lesson successfully ordered.');
    resetForm();
    onClose();
  };
  return (
    <>
      <BaseModalWrap onClose={onClose}>
        <ModalWrap>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <WrapCloseBtn onClick={onClose}>
                <CloseBtn strokeWidth="2.5" />
              </WrapCloseBtn>
              <Title>Book trial lesson</Title>
              <Discrp>
                Our experienced tutor will assess your current language level,
                discuss your learning goals, and tailor the lesson to your
                specific needs.
              </Discrp>
              <WrapTeacher>
                <AvatarTeacher src={avatar_url} alt="avatar" />
                <div>
                  <YourTeacher>Your teacher</YourTeacher>
                  <NameTeacher>
                    {name} {surname}
                  </NameTeacher>
                </div>
              </WrapTeacher>
              <TitleReason>
                What is your main reason for learning English?
              </TitleReason>

              <Group>
                <label>
                  <StyleRadio type="radio" name="reason" value="CaB" />
                  Career and business
                </label>
                <label>
                  <StyleRadio type="radio" name="reason" value="LfK" />
                  Lesson for kids
                </label>
                <label>
                  <StyleRadio type="radio" name="reason" value="LA" />
                  Living abroad
                </label>
                <label>
                  <StyleRadio type="radio" name="reason" value="EaC" />
                  Exams and coursework
                </label>
                <label>
                  <StyleRadio type="radio" name="reason" value="fiv" />
                  Culture, travel or hobby
                </label>
              </Group>

              <label aria-label="Field for Full name">
                <StyleInput type="text" name="name" placeholder="Name" />
                <ErrorMsg name="name" component="div" />
              </label>
              <label aria-label="Field for Email">
                <StyleInput type="email" name="email" placeholder="Email" />
                <ErrorMsg name="email" component="div" />
              </label>
              <label aria-label="Field for Phone number">
                <StyleInput
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                />
                <ErrorMsg name="phone" component="div" />
              </label>
              <BtnSubmit type="submit">
                <span>Book</span>
              </BtnSubmit>
            </Form>
          </Formik>
        </ModalWrap>
      </BaseModalWrap>
      ;
    </>
  );
};
