import { FC, useState } from "react";
import { InputAuthProps } from "../../helpers/InterfaceData";
import ButtonEye from "../Button/ButtonEye/ButtonEye";
import {
  StyledError,
  StyledInputAuth,
  StyledInputAuthInput,
} from "./InputAuth.styled";

type AuthInputName = "userName" | "userEmail" | "userPassword";

const InputAuth: FC<InputAuthProps> = ({
  name,
  placeholder,
  register,
  errors,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const getInputType = () => {
    if (name === "userPassword") {
      return passwordVisible ? "text" : "password";
    } else {
      return name === "userEmail" ? "email" : "text";
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <StyledInputAuth>
      <StyledInputAuthInput
        {...register(name as AuthInputName)}
        type={getInputType()}
        placeholder={placeholder}
        $error={!!errors[name]}
      />
      <StyledError>{String(errors[name]?.message || "")}</StyledError>

      {name === "userPassword" && (
        <ButtonEye
          togglePasswordVisibility={togglePasswordVisibility}
          passwordVisible={passwordVisible}
        />
      )}
    </StyledInputAuth>
  );
};

export default InputAuth;
