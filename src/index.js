
//-----v6---------------------------------
/* eslint-disable no-undef */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./InitialPage/App";
import { AuthProvider } from "./components/common/AuthContext";



const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
   <AuthProvider>
    <App />
    </AuthProvider>
  </BrowserRouter>
);

if (module.hot) {
  module.hot.accept();
}
