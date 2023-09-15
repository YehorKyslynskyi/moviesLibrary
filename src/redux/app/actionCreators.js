import { appSlice } from "./appSlice";

export const themeToogle = () => async (dispatch) => {
  try {
    dispatch(appSlice.actions.themeToogling());
  } catch (e) {
    console.log(e);
  }
};
