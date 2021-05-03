import React, { Fragment } from "react";
import { Route } from "react-router-dom";
// RegisterAccountTemplate bang Router-dom

export const RegisterAccountTemplate = (props) => {
  const { Component, path } = props;
  return (
    <Route
      path={path}
      exact
      render={(propsRoute) => {
        return (
          <div>
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
