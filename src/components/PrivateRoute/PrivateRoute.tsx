import { ComponentType, FC } from "react";
import useAuthUser from "../../hooks/useAuthUser";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: ComponentType;
  redirectTo: string;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isAuthUser } = useAuthUser();
  return isAuthUser ? <Component /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
