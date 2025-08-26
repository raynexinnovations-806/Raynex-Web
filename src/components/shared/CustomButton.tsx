import { theme } from "@/theme";
import { Button, ButtonProps } from "@mui/material";

type Props = {
  type?: "button" | "reset" | "submit";
  title?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
} & ButtonProps;

const CustomButton = (props: Props) => {
  const { type, title, startIcon, endIcon, ...restProps } = props;
  return (
    <Button
      type={type ? type : "button"}
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        padding: "0px",
        border: "1px solid",
        fontFamily: "'Inter', sans-serif",
      }}
      startIcon={startIcon && startIcon}
      endIcon={endIcon && endIcon}
      {...restProps}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
