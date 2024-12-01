// import App from "./standalone/context/ContextApp.tsx";
// import App from "./standalone/transition/TransitionApp.tsx";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import TransitionApp from "./standalone/transition/TransitionApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<TransitionApp />);
