import { FC } from "react";
import sprite from "../../images/svg/sprite.svg";

type Position = "static" | "relative" | "absolute" | "sticky" | "fixed";

interface IconProps {
  iconName: string;
  width: string;
  height: string;
  position?: Position;
  top?: string;
  right?: string;
  fill?: string;
  stroke?: string;
}

const Icon: FC<IconProps> = ({
  iconName,
  width,
  height,
  position,
  top,
  right,
  fill,
  stroke,
}) => {
  return (
    <>
      <svg style={{ width, height, position, top, right, fill, stroke }}>
        <use href={`${sprite}#${iconName}`} />
      </svg>
    </>
  );
};

export default Icon;
