import React from "react";
import { useRouteError } from "react-router-dom";

export const NotFount = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred in the page.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        <i>{error.data}</i>
      </p>
    </div>
  );
}