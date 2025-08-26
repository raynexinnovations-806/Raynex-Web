import { Notify } from "@/types/notifyType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const notifySlice = createSlice({
  name: "notify",
  initialState: null as Notify | null,
  reducers: {
    setNotify(state, action: PayloadAction<Notify | null>) {
      return action.payload ?? null;
    },
  },
});

export const { setNotify } = notifySlice.actions;
export default notifySlice.reducer;
