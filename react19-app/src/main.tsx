// import App from "./standalone/context/ContextApp.tsx";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./standalone/transition/TransitionApp.tsx";

// import CompilerApp from "./standalone/compiler/CompilerApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
