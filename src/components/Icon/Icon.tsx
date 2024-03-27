import { FC } from "react";
import sprite from "../../images/svg/sprite.svg";

interface IconProps {
  iconName: string;
  width: string;
  height: string;
}

const Icon: FC<IconProps> = ({ iconName, width, height }) => {
  return (
    <>
      <svg style={{ width, height }}>
        <use href={`${sprite}#${iconName}`} />
      </svg>
    </>
  );
};

export default Icon;
