import styled from 'styled-components';
import { colors } from '../../constants';
import { ErrorMessage, Field } from 'formik';

export const ModalWrap = styled.div`
  max-width: 600px;
  padding: 64px;
  background-color: ${colors.WHITE};
  border-radius: 30px;
`;

export const Group = styled.div`
  margin-block-end: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    line-height: 1.375;
  }
`;

export const StyleRadio = styled(Field)`
  margin-inline-end: 8px;
  cursor: pointer;
  position: relative;
  top: 5px;
  block-size: 22px;
  inline-size: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid rgba(18, 20, 23, 0.1);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 24px;
    block-size: 24px;
    border-radius: 50%;
    border: 2px solid #f4c550;
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    inline-size: 12px;
    block-size: 12px;
    border-radius: 50%;
    background-color: #f4c550;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;

export const StyleInput = styled(Field)`
  inline-size: 100%;
  margin-block-end: 18px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  outline: none;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
  margin-block-end: 18px;
`;

export const BtnSubmit = styled.button`
  padding-block: 16px;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  background-color: #f4c550;
  transition: background-color 350ms linear;
  width: 100%;
  margin-top: 22px;

  &:hover {
    background-color: #ffdc86;
  }

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.555;
    white-space: nowrap;
  }
`;

export const Title = styled.h1`
  color: rgb(18, 20, 23);
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Discrp = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 20px;
`;

export const AvatarTeacher = styled.img`
  width: 44px;
  border-radius: 100%;
`;

export const WrapTeacher = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 40px;
`;

export const YourTeacher = styled.p`
  color: rgb(138, 138, 137);
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

export const NameTeacher = styled.p`
  color: rgb(18, 20, 23);

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const TitleReason = styled.h3`
  color: rgb(18, 20, 23);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const WrapCloseBtn = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  &:hover svg path {
    stroke-width: 3.5;
  }
`;
