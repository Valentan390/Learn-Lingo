import { FC } from "react";
import sprite from "../../images/svg/sprite.svg";

interface IconProps {
  iconName: string;
  width: string;
  height: string;
}

const Icon: FC<IconProps> = ({ iconName, width, height }) => {
  return (
    <div>
      <svg style={{ width, height }}>
        <use href={`${sprite}#${iconName}`} />
      </svg>
    </div>
  );
};

export default Icon;
