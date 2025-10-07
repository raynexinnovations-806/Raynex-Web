import { theme } from "@/theme";
import { Button, ButtonProps } from "@mui/material";

type Props = {
  type?: "button" | "reset" | "submit";
  title?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
} & ButtonProps;

const CustomButton = (props: React.PropsWithChildren<Props>) => {
  const { type, title, startIcon, endIcon, children, ...restProps } = props;
  const isFull = Boolean(restProps.fullWidth);

  return (
    <Button
      type={type ?? "button"}
      sx={{
        display: "flex",
        width: isFull ? "100%" : "auto",
        justifyContent: "center",
        padding: "0px",
        // border: "1px solid",
        fontFamily: "'Inter', sans-serif",
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      {...restProps}
    >
      {children ?? title}
    </Button>
  );
};

export default CustomButton;
