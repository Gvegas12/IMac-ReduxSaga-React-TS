import { combineReducers } from "redux";
import loginReducer from "./auth/login/login.reducer";
import themeReducer from "./theme/theme.reducer";
import usersReduser from "./users/users.reduser";

const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReduser,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
