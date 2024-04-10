import { TailSpin } from "react-loader-spinner";
import { SteledLoaderTailSpinWrapper } from "./LoaderTailSpin.styled";

const LoaderTailSpin = () => {
  return (
    <SteledLoaderTailSpinWrapper>
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="var(--yellow)"
        ariaLabel="tail-spin-loading"
        radius="2"
        wrapperStyle={{}}
        wrapperClass=""
        z-index="3"
      />
    </SteledLoaderTailSpinWrapper>
  );
};

export default LoaderTailSpin;
