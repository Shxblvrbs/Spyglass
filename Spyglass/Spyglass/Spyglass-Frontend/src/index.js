import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";

    // ReactDOM.createRoot(document.getElementByID('root'))
    //     .render(
    //         <React.StrictMode>
    //             <ApiProvider>
    //                 <App />
    //             </ApiProvider>
    //         </React.StrictMode>
    //     );  

createRoot(document.getElementById("root")).render(<App />);

reportWebVitals();
