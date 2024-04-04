import { FC } from "react";
import {
  StyledTrialLessonButton,
  StyledTrialLessonContainer,
  StyledTrialLessonDescription,
  StyledTrialLessonImg,
  StyledTrialLessonName,
  StyledTrialLessonTitle,
  StyledTrialLessonWrapper,
  StyledTrialLessonYour,
} from "./TrialLessonModal.styled";
import ButtonClose from "../../Button/ButtonClose/ButtonClose";
import useModalHandler from "../../../hooks/useModalHandler";
import { useForm } from "react-hook-form";
import ReasonStudy from "../../ReasonStudy/ReasonStudy";
import { FormDataReason } from "../../../helpers/InterfaceData";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaReason } from "../../../helpers/validation";
import ReasonStudyInput from "../../ReasonStudyInput/ReasonStudyInput";
import { toast } from "react-toastify";

const TrialLessonModal: FC = () => {
  const { teacherData } = useModalHandler();
  const { handleCloseModal } = useModalHandler();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataReason>({
    mode: "onTouched",
    resolver: yupResolver(schemaReason),
  });

  const onSubmit = handleSubmit(
    async ({ fullName, email, phoneNumber, reason }) => {
      try {
        alert(
          `Hello ${fullName}. You have successfully signed up for a trial lesson with a teacher ${teacherData.name} ${teacherData.surname}. Please verify your details. 
        Name: ${fullName}
        Email: ${email}
        Phone: ${phoneNumber}
        Reason: ${reason}
        `
        );
        await reset();
        await handleCloseModal();
        await toast.success(
          `${fullName}, You have successfully submitted your data.`
        );
      } catch (error) {
        if (error instanceof Error) {
          toast.error(`${error.message}`);
        }
      }
    }
  );

  return (
    <StyledTrialLessonWrapper>
      <ButtonClose />
      <StyledTrialLessonTitle>Book trial lesson</StyledTrialLessonTitle>

      <StyledTrialLessonDescription>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </StyledTrialLessonDescription>

      <StyledTrialLessonContainer>
        <StyledTrialLessonImg
          src={teacherData.avatar_url}
          alt={teacherData.name}
        />
        <StyledTrialLessonYour>
          Your teacher <br />{" "}
          <StyledTrialLessonName>
            {teacherData.name} {teacherData.surname}
          </StyledTrialLessonName>
        </StyledTrialLessonYour>
      </StyledTrialLessonContainer>

      <form onSubmit={onSubmit}>
        <ReasonStudy register={register} errors={errors} />
        <ReasonStudyInput register={register} errors={errors} />

        <StyledTrialLessonButton type="submit">Send</StyledTrialLessonButton>
      </form>
    </StyledTrialLessonWrapper>
  );
};

export default TrialLessonModal;
