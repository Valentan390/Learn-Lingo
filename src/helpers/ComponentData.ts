import { Variants } from "framer-motion";
import { FilterOption, SelectOptions } from "./InterfaceData";

export const reviews = [
  { quantity: "32,000", text: "Experienced<br /> tutors" },
  { quantity: "300,000", text: "5-star tutor<br /> reviews" },
  { quantity: "120", text: "Subjects<br /> taught" },
  { quantity: "200", text: "Tutor<br /> nationalities" },
];

export const unregistered = [
  { to: "/", text: "Home" },
  { to: "/teachers", text: "Teachers" },
];

export const registered = [
  { to: "/", text: "Home" },
  { to: "/teachers", text: "Teachers" },
  { to: "/favorites", text: "Favorites" },
];

export const inputDataSignUp = [
  {
    name: "userName",
    placeholder: "Name",
  },
  {
    name: "userEmail",
    placeholder: "Email",
  },
  {
    name: "userPassword",
    placeholder: "Password",
  },
];

export const inputDataSignIn = [
  {
    name: "userEmail",
    placeholder: "Email",
  },
  {
    name: "userPassword",
    placeholder: "Password",
  },
];

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0, duration: 0.8 },
  },
};

export const inputReasons = [
  {
    name: "fullName",
    placeholder: "Full Name",
  },
  {
    name: "email",
    placeholder: "Email",
  },
  {
    name: "phoneNumber",
    placeholder: "Phone number",
  },
];

export const optionsLanguages: SelectOptions[] = [
  {
    value: "French",
    label: "French",
  },
  {
    value: "English",
    label: "English",
  },
  {
    value: "German",
    label: "German",
  },
  {
    value: "Spanish",
    label: "Spanish",
  },
  {
    value: "Mandarin Chinese",
    label: "Mandarin Chinese",
  },
  {
    value: "",
    label: "NoFilter",
  },
];

export const optionsLevelKnowledge: SelectOptions[] = [
  {
    value: "A1 Beginner",
    label: "A1 Beginner",
  },
  {
    value: "A2 Elementary",
    label: "A2 Elementary",
  },
  {
    value: "B1 Intermediate",
    label: "B1 Intermediate",
  },
  {
    value: "B2 Upper-Intermediate",
    label: "B2 Upper-Intermediate",
  },
  {
    value: "",
    label: "NoFilter",
  },
];

export const optionsPrice: SelectOptions[] = [
  {
    value: "20",
    label: "20 $",
  },
  {
    value: "25",
    label: "25 $",
  },
  {
    value: "30",
    label: "30 $",
  },
  {
    value: "35",
    label: "35 $",
  },
  {
    value: "",
    label: "NoFilter",
  },
];

export const filterOptions: FilterOption[] = [
  { options: optionsLanguages, label: "Languages", name: "languages" },
  {
    options: optionsLevelKnowledge,
    label: "Level of knowledge",
    name: "levelKnowledge",
  },
  { options: optionsPrice, label: "Price", name: "price" },
];
