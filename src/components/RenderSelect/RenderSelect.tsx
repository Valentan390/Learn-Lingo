import { FC } from "react";
import Select from "react-select";
import { customStyles } from "../FiltersTeachers/SelectCustomStyles";
import { FilterTeachers, SelectOptions } from "../../helpers/InterfaceData";
import {
  StyledFiltersTeachersLabel,
  StylydFiltersTeachersContainer,
} from "./RenderSelect.styled";

interface RenderSelectProps {
  options: SelectOptions[];
  label: string;
  value: SelectOptions;
  name: keyof FilterTeachers;
  handleChange: (
    selected: SelectOptions | null,
    selectName: keyof FilterTeachers
  ) => void;
}

const RenderSelect: FC<RenderSelectProps> = ({
  options,
  label,
  value,
  name,
  handleChange,
}) => {
  return (
    <StylydFiltersTeachersContainer>
      <StyledFiltersTeachersLabel htmlFor={name}>
        {label}
      </StyledFiltersTeachersLabel>
      <Select
        options={options}
        styles={customStyles}
        value={value}
        onChange={(selected) => handleChange(selected, name)}
        id={name}
      />
    </StylydFiltersTeachersContainer>
  );
};

export default RenderSelect;
