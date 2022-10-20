import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/error/store";
import { register } from "./serviceWorkerRegistration";
import { Offline, Online} from 'react-detect-offline'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// const pollingConfig : PollingConfig= {
//   enabled:true,
//   url:"https://ipv4.icanhazip.com/",
//   interval:5000,
//   timeout:5000
// }
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Online >
        <App status="online"/>
      </Online>
      <Offline >
        <App status="offline"/>
      </Offline>
    </Provider>
  </React.StrictMode>
);

register();
