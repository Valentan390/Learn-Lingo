import styled from "styled-components";

export const StyledReasonStudyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  justify-content: start;
  align-items: start;
  width: 100%;
  margin-bottom: 40px;
`;

export const StyledReasonStudyInputLabel = styled.label`
  width: 100%;
  position: relative;
`;

interface StyledReasonStudyInputProps {
  $error: boolean;
}

export const StyledReasonStudyInput = styled.input<StyledReasonStudyInputProps>`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 12px;
  border: 1px solid
    ${(props) => (props.$error ? "red" : "rgba(18, 20, 23, 0.1)")};
  width: 100%;

  &::placeholder {
    color: ${(props) => (props.$error ? "red" : "var(--black)")};
    font-size: 16px;
    font-weight: var(--regular);
    line-height: 1.37;
  }

  &:hover {
    border-color: ${(props) =>
      props.$error ? "var(--red)" : "rgba(25, 26, 21, 0.3)"};
    background-color: ${(props) =>
      props.$error ? "transparent" : "transparent"};
    box-shadow: ${(props) =>
      props.$error ? "none" : "0 0 10px rgba(0, 0, 0, 0.3)"};
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.$error ? "var(--red)" : "rgba(25, 26, 21, 0.3)"};
    box-shadow: ${(props) =>
      props.$error
        ? "0 0 0 3px rgba(255, 0, 0, 0.3)"
        : "0 0 10px rgba(0, 0, 0, 0.3)"};
  }
`;

// export const StyledReasonStudyInput = styled.``;
// export const StyledReasonStudyInput = styled.``;
// export const StyledReasonStudyInput = styled.``;
// export const StyledReasonStudyInput = styled.``;
// export const StyledReasonStudyInput = styled.``;
