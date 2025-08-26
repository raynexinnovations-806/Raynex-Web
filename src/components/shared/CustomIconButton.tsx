import { Button, IconButton, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { MouseEventHandler } from "react";

type Props = {
  handleEvent?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactElement;
  style?: string;
} & Record<string, any>;

const CustomIconButton = (props: Props) => {
  const { handleEvent, icon, style, ...restProps } = props;
  return (
    <IconButton
      onClick={handleEvent ? handleEvent : undefined}
      className={`${style}`}
      {...restProps}
    >
      {icon && icon}
    </IconButton>
  );
};

export default CustomIconButton;
