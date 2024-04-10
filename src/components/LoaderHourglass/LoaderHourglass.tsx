import { Hourglass } from "react-loader-spinner";
import { StyledHourglassWrapper } from "./LoaderHourglass.styled";

const LoaderHourglass = () => {
  return (
    <StyledHourglassWrapper>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["var(--blue)", "var(--yellow)"]}
      />
    </StyledHourglassWrapper>
  );
};

export default LoaderHourglass;
