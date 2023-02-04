import ReactDOM from "react-dom/client";
import AppRouter from "./view/Router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./data/store/index";

import "./view/assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
