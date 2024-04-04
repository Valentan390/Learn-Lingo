import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import {
  StyledReasonStudyContainer,
  StyledReasonStudyLabel,
  StyledReasonStudyTitle,
} from "./ReasonStudy.styled";
import { StyledError } from "../InputAuth/InputAuth.styled";
import { FormDataReason } from "../../helpers/InterfaceData";

interface ReasonStudyProps {
  register: UseFormRegister<FormDataReason>;
  errors: FieldErrors<FormDataReason>;
}

const ReasonStudy: FC<ReasonStudyProps> = ({ register, errors }) => {
  const reasons = [
    "Career and business",
    "Lesson for kids",
    "Living abroad",
    "Exams and coursework",
    "Culture, travel or hobby",
  ];
  return (
    <>
      <StyledReasonStudyTitle>
        What is your main reason for learning English?
      </StyledReasonStudyTitle>
      <StyledReasonStudyContainer>
        {reasons.map((reason, index) => (
          <StyledReasonStudyLabel htmlFor="" key={index}>
            <input type="radio" value={reason} {...register("reason")} />
            {reason}
            <StyledError>{String(errors?.reason?.message || "")}</StyledError>
          </StyledReasonStudyLabel>
        ))}
      </StyledReasonStudyContainer>
    </>
  );
};

export default ReasonStudy;
