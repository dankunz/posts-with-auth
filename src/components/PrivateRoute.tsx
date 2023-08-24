import React from "react";
import { RequireAuth } from "react-auth-kit";
import { Route } from "react-router-dom";

type Props = {
  path: string;
  element: React.ReactElement;
};

export default function PrivateRoute({ path, element }: Props) {
  return (
    <Route
      path={path}
      element={<RequireAuth loginPath={"/login"}>{element}</RequireAuth>}
    />
  );
}
