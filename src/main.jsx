import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";
import store from "./redux/store";
import { Provider } from "react-redux"; 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    </Provider>
  </React.StrictMode>
);
