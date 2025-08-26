import Image from "next/image";
import { Box } from "@mui/material";
import projectLogo from "@/utils/images/seemflow-dark.png";

const MainLogo = () => {
  return (
    <Box className="sm:max-w-sm">
      <Image
        className="mx-auto h-10 w-auto"
        width={100}
        height={100}
        src={projectLogo}
        alt="Company Logo"
      />
    </Box>
  );
};

export default MainLogo;
