import { selectUser } from "../redux/user/userSelectors";
import { useAppSelector } from "./useReduxHooks";

const useAuthUser = () => {
  const { userEmail, userName, id, token } = useAppSelector(selectUser);
  return { isAuthUser: !!token, userEmail, userName, id, token };
};

export default useAuthUser;
