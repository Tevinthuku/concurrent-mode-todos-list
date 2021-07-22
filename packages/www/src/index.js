import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import "./index.css";
import RelayEnvironment from "./RelayEnvironment";
import routes from "./routes";
import RoutingContext from "./routes/routing/RoutingContext";
import createRouter from "./routes/routing/createRouter";
import RouterRenderer from "./routes/routing/RouteRenderer";

// Uses the custom router setup to define a router instanace that we can pass through context
const router = createRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <RoutingContext.Provider value={router.context}>
      {/* Render the active route */}
      <RouterRenderer />
    </RoutingContext.Provider>
  </RelayEnvironmentProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
