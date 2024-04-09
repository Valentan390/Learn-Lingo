import { FC, useEffect, useState } from "react";
import Select from "react-select";
import { customStyles } from "./SelectCustomStyles";
import { SelectOptions } from "../../helpers/InterfaceData";
import {
  StyledFiltersTeachersLabel,
  StylydFiltersTeachersContainer,
  StylydFiltersTeachersWrapper,
} from "./FiltersTeachers.styled";
import {
  optionsLanguages,
  optionsLevelKnowledge,
  optionsPrice,
} from "../../helpers/ComponentData";
import { useAppDispatch } from "../../hooks/useReduxHooks";
import { setFilterTeachers } from "../../redux/filter/filterSlise";

const FiltersTeachers: FC = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    languages: optionsLanguages[5],
    levelKnowledge: optionsLevelKnowledge[4],
    price: optionsPrice[4],
  });
  const dispatch = useAppDispatch();

  const handleChange = (selected: SelectOptions | null, selectName: string) => {
    if (selected) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [selectName]: selected,
      }));
    }
  };

  const renderSelect = (
    options: SelectOptions[],
    label: string,
    value: SelectOptions,
    name: string
  ) => (
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

  useEffect(() => {
    const { languages, levelKnowledge, price } = selectedOptions;
    dispatch(
      setFilterTeachers({
        languages: languages.value,
        levelKnowledge: levelKnowledge.value,
        price: price.value,
      })
    );
  }, [dispatch, selectedOptions]);

  return (
    <StylydFiltersTeachersWrapper>
      {renderSelect(
        optionsLanguages,
        "Languages",
        selectedOptions.languages,
        "languages"
      )}
      {renderSelect(
        optionsLevelKnowledge,
        "Level of knowledge",
        selectedOptions.levelKnowledge,
        "levelKnowledge"
      )}
      {renderSelect(optionsPrice, "Price", selectedOptions.price, "price")}
    </StylydFiltersTeachersWrapper>
  );
};

export default FiltersTeachers;
