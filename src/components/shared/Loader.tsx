import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  loading: boolean;
};

const Loader = ({ loading }: Props) => {
  return (
    <Backdrop className="bg-black z-50" open={loading}>
      <CircularProgress
        variant="determinate"
        className="absolute top-[15%] text-white"
        size={60}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        className="absolute top-[15%] text-primary duration-700"
        size={60}
        thickness={4}
        disableShrink
        color="inherit"
      />
    </Backdrop>
  );
};

export default Loader;
