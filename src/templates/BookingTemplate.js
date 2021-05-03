import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Hometemplate bang Router-dom
export const BookingTemplate = (props) => {
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
