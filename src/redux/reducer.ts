import { combineReducers } from "redux";
import auth from "./slices/auth";
import count from "./slices/count";

const rootReducer = combineReducers({
  auth,
  count,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState { }
}
export default rootReducer;