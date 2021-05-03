import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// AdminTemplate bang Router-dom

export const AdminTemplate = (props) => {
  const { Component, path } = props;

  return (
    <Route
      path={path}
      exact
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
