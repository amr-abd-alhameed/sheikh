import { createSlice } from "@reduxjs/toolkit";
import { bodyData } from "../../../public/data";
import { PayloadAction } from "@reduxjs/toolkit";
interface PropType {
  char1?: string;
  char2?: string;
  char3?: string;
  char4?: string;
  char5?: string;
  char6?: string;
}
interface initialStateTypes {
  id: string;
  character: string;
  outPut: string;
  prop1: PropType;
  prop2: PropType;
  prop3: PropType;
  prop4: PropType;
  prop5: PropType;
  prop6: PropType;
}
const initialState: initialStateTypes[] = bodyData;


const charSlice = createSlice({
  name: "char",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<initialStateTypes[]>) => {
      state = action.payload;
    },
  },
});
export const { updateData } = charSlice.actions;
export default charSlice.reducer;
