import { result } from "lodash";
import { Axios } from "../axiosConfig";

type Props = {
    firstName: string,
    lastName: string,
    email: string,
    mobileNo: string,
    message: string
};
type Res = {
  status: number;
  data: null;
  error: any;
};

export const contactus = async ({firstName,email,lastName,message,mobileNo }: Props) => {
  let res: Res = { status: 0, data: null, error: "" };

  try {
    const result = await Axios.post("/create", {firstName,email,lastName,message,mobileNo},  {
        headers: {
          "Content-Type": "application/json",
        },
      });

    res.status = 200;
    res.data = result.data.data;
   
  } catch (error: any) {
   
    res.status = error.response.status;
    res.error = error.response.data.error;
  }

  return res;
};
