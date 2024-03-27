import { FC } from "react";
import InputAuth from "../../InputAuth/InputAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormData } from "../../../helpers/InterfaceData";
import { schemaSignIn, schemaSignUp } from "../../../helpers/validation";
import {
  inputDataSignIn,
  inputDataSignUp,
} from "../../../helpers/ComponentData";
import {
  StyledAuthModalButton,
  StyledAuthModalForm,
  StyledAuthModalText,
  StyledAuthModalTitle,
  StyledAuthModalWrapper,
} from "./SignUpAndSignInModal.styled";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";

interface SignUpAndSignInModalProps {
  modalType: string;
}

const SignUpAndSignInModal: FC<SignUpAndSignInModalProps> = ({ modalType }) => {
  const schema = modalType === "SignUp" ? schemaSignUp : schemaSignIn;

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<FormData>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <StyledAuthModalWrapper>
      <ButtonClose />
      <StyledAuthModalTitle>
        {modalType === "SignUp" ? "Registration" : "Log In"}
      </StyledAuthModalTitle>
      <StyledAuthModalText>
        {modalType === "SignUp"
          ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
          : "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."}
      </StyledAuthModalText>

      <StyledAuthModalForm onSubmit={onSubmit}>
        {(modalType === "SignUp" ? inputDataSignUp : inputDataSignIn).map(
          (inputData, index) => (
            <InputAuth
              key={index}
              name={inputData.name}
              placeholder={inputData.placeholder}
              register={register}
              errors={errors}
            />
          )
        )}

        <StyledAuthModalButton type="submit">
          {modalType === "SignUp" ? "Sign Up" : "Log In"}
        </StyledAuthModalButton>
      </StyledAuthModalForm>
    </StyledAuthModalWrapper>
  );
};

export default SignUpAndSignInModal;
