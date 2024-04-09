import { StylesConfig } from "react-select";
import { SelectOptions } from "../../helpers/InterfaceData";

export const customStyles: StylesConfig<SelectOptions, false> = {
  container: (provided) => ({
    ...provided,
    width: "221px",
    padding: "0",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "var(--white)",
    color: "var(--black)",
    fontSize: "18px",
    fontWeight: "var(--medium)",
    lineHeight: "1.1",
    transition: "var(--transition)",

    input: {
      display: "none",
    },

    svg: {
      color: "var(--black)",
      width: "20px",
      height: "20px",
    },

    "&:hover": {
      boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.3)",
    },
  }),

  input: (provided) => ({
    ...provided,
    padding: "14px 18px",
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "var(--white)",
    boxShadow: "0px 20px 69px 0px rgba(0, 0, 0, 0.3)",
    display: "flex",
    gap: "8px",
  }),

  menuList: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    margin: "14px 18px",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    color: state.isSelected ? "var(--black)" : "rgba(18, 20, 23, 0.20)",
    fontFamily: "Roboto",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.11",
    padding: "0",

    "&:hover": {
      color: "var(--black)",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "var(--black)",
    marginLeft: "18px",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "var(--black)",
    fontSize: "18px",
    fontWeight: "var(--medium)",
    lineHeight: "1.11",
    marginLeft: "18px",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
