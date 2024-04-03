import styled from "styled-components";

export const StyledTeachersItem = styled.li`
  padding: 24px;
  display: flex;
  gap: 48px;
  justify-content: start;
  align-items: start;
  width: 100%;
  border-radius: 24px;
  background: #fff;
`;

export const StyledTeachersItemImgContainer = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 3px solid var(--lightYellow);
  background: var(--white);
  padding: 12px;
  position: relative;
`;

export const StyledTeachersItemImg = styled.img`
  border-radius: 100px;
`;

export const StyledTeachersItemTextContainer = styled.div`
  width: 100%;
`;

export const StyledTeachersItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`;

interface StyledTeachersItemP {
  color?: string;
}

export const StyledTeachersItemP = styled.p<StyledTeachersItemP>`
  color: ${(props) => (props.color ? "#8a8a89 " : "var(--black) ")};
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
  margin-bottom: ${(props) => (props.color ? "8px" : "0")};
`;

export const StyledTeachersItemLessons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: max-content;
`;

export const StyledTeachersItemLessonsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: max-content;
`;

interface StyledTeachersItemSpanBlack {
  textDecoration?: string;
}

export const StyledTeachersItemSpanBlack = styled.span<StyledTeachersItemSpanBlack>`
  color: var(--black);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
  text-decoration-line: ${(props) =>
    props.textDecoration ? "underline" : "none"};
`;

export const StyledTeachersItemSpanGrin = styled.span`
  color: var(--grin);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
`;

export const StyledTeachersItemName = styled.h3`
  color: var(--black);
  font-size: 24px;
  font-weight: var(--medium);
  line-height: 1;
  margin-bottom: 32px;
`;

export const StyledTeachersItemButtonHeart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 38px;
  padding: 0;
`;

export const StyledTeachersItemButtonReadMore = styled.button`
  color: var(--black);
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 1.5;
  text-decoration-line: underline;
  margin-top: 8px;
  margin-bottom: 32px;
  margin-left: 0;
  margin-right: 0;
  padding: 0;
`;

export const StyledTeachersItemLevels = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  width: max-content;
`;

interface StyledTeachersItemLevelProps {
  $backg?: string;
}

export const StyledTeachersItemLevel = styled.li<StyledTeachersItemLevelProps>`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 35px;
  border: ${(props) =>
    !props.$backg ? "1px solid rgba(18, 20, 23, 0.2)" : "none"};
  color: var(--black);
  font-size: 14px;
  font-weight: var(--medium);
  line-height: 1.14;
  background: ${(props) => (props.$backg ? "var(--yellow)" : "transparent")};
`;

export const StyledTeachersItemButtonLesson = styled.button`
  display: flex;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--yellow);
  color: var(--black);
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 1.55;
  transition: var(--transition);
  margin-top: 32px;

  &:hover,
  &:focus {
    background: var(--mustard);
    color: var(--white);
  }
`;

// export const StyledTeachersItem = styled.``
