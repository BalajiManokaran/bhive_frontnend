import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { appRoutes } from "./routes";

const Bhive = React.lazy(() =>
  import("../screens").then((module) => ({ default: module.Bhive }))
);

export default function RouterApp() {
  return (
    <Routes>
      <Route
        path={appRoutes?.homePage}
        element={
          <Suspense fallback={<></>}>
            <Bhive />
          </Suspense>
        }
      />
    </Routes>
  );
}
