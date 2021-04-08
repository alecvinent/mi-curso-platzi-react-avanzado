import React, {Fragment, useContext} from "react";
import {Context} from "../Context";
import {SubmitButton} from "../components/SubmitButton";

export const User = () => {
  const {logout} = useContext(Context);
  return (
    <Fragment>
      <h1>User</h1>
      <SubmitButton onClick={logout}>Cerrar sesión</SubmitButton>
    </Fragment>
  );
};
