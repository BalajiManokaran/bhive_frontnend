import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { commonSlice } from "./slices/common";

const store = configureStore({
  reducer: { commonData: commonSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

interface AppReduxProps {
  children: React.ReactNode;
}
export const AppRedux: React.FC<AppReduxProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
