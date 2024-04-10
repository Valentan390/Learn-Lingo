import { FC, useState } from "react";
import { FilterTeachers, SelectOptions } from "../../helpers/InterfaceData";
import { StylydFiltersTeachersWrapper } from "./FiltersTeachers.styled";
import { filterOptions } from "../../helpers/ComponentData";
import { useAppDispatch, useAppSelector } from "../../hooks/useReduxHooks";
import {
  setFilterFavoriteTeachers,
  setFilterTeachers,
} from "../../redux/filter/filterSlise";
import { selectFilterTeachers } from "../../redux/teachers/teachersSelectors";
import RenderSelect from "../RenderSelect/RenderSelect";
import { useLocation } from "react-router-dom";
import { selectFilterFavoriteTeachers } from "../../redux/filter/filterSelectors";

const FiltersTeachers: FC = () => {
  const { pathname } = useLocation();
  const filtersTeachers = useAppSelector(selectFilterTeachers);
  const filtersFavoriteTeachers = useAppSelector(selectFilterFavoriteTeachers);
  const [selectedOptions, setSelectedOptions] = useState<FilterTeachers>(
    pathname === "/teachers" ? filtersTeachers : filtersFavoriteTeachers
  );
  const dispatch = useAppDispatch();

  const handleChange = (
    selected: SelectOptions | null,
    selectName: keyof FilterTeachers
  ) => {
    if (selected) {
      const updatedFilters = { ...selectedOptions, [selectName]: selected };
      setSelectedOptions(updatedFilters);
      pathname === "/teachers"
        ? dispatch(setFilterTeachers(updatedFilters))
        : dispatch(setFilterFavoriteTeachers(updatedFilters));
    }
  };

  return (
    <StylydFiltersTeachersWrapper>
      {filterOptions.map(({ options, label, name }) => (
        <RenderSelect
          key={name}
          options={options}
          label={label}
          value={selectedOptions[name]}
          name={name}
          handleChange={handleChange}
        />
      ))}
    </StylydFiltersTeachersWrapper>
  );
};

export default FiltersTeachers;
