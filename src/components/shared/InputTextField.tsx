import { theme } from "@/theme";
import {
  FormHelperText,
  InputBase,
  InputBaseProps,
  Tooltip,
} from "@mui/material";
import { forwardRef } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
type InputTextFieldType = InputBaseProps & {
  StartIcon?: JSX.Element;
  EndIcon?: JSX.Element;
  setVisibility?: React.Dispatch<React.SetStateAction<boolean>>;
  visibility?: boolean;
  wrapperStyle?: string;
  errorMassage?: string;
  ClassName?: string;
  toolTipTitle?: string;
  isLabelShow?: boolean;
};

const InputTextField = forwardRef((props: InputTextFieldType, ref) => {
  const {
    id,
    name = "",
    type,
    placeholder,
    error,
    errorMassage,
    StartIcon,
    EndIcon,
    setVisibility,
    visibility,
    wrapperStyle,
    ClassName,
    toolTipTitle,
    isLabelShow = true,
    ...restProps
  } = props;

  return (
    <>
      <Tooltip title={toolTipTitle || ""} arrow>
        <div className="flex flex-col gap-1.5 w-full">
          {isLabelShow && (
            <div className="text-base font-semibold text-black-500">{name}</div>
          )}
          <div className={`flex flex-row items-center w-full ${wrapperStyle}`}>
            {StartIcon && StartIcon}
            <InputBase
              placeholder={placeholder ?? "Enter your text here"}
              type={type}
              id={id}
              sx={{
                flexGrow: 1,
                // color: theme.palette.black[700],
                fontSize: "16px",
                lineHeight: "1.5rem",
                letterSpacing: "0.04rem",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                input: {
                  "&::placeholder": {
                    opacity: 1,
                    letterSpacing: "0.04rem",
                    // color: theme.palette.black[400],
                  },
                },
              }}
              className={ClassName}
              {...restProps}
              ref={ref}
            />
            {EndIcon && (
              <div
                onClick={() => setVisibility && setVisibility(!visibility)}
                className="border-l border-black-200 pl-4"
              >
                {EndIcon}
              </div>
            )}
          </div>
        </div>
      </Tooltip>
      {errorMassage && (
        <FormHelperText error focused className="ml-2">
          {errorMassage}
        </FormHelperText>
      )}
    </>
  );
});
InputTextField.displayName = "InputText";

export default InputTextField;
