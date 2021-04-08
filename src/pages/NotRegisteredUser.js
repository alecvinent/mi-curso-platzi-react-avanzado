import React, {Fragment, useContext} from "react";

import {Context} from "../Context";
import {UserForm} from "../components/UserForm/UserForm";
import {RegisterMutation} from "../container/RegisterMutation";
import {LoadingIndicator} from "../components/LoadingIndicator";
import {LoginMutation} from "../container/LoginMutation";

export const NotRegisteredUser = () => {
  const {activateAuth} = useContext(Context);

  return <Fragment>

    <RegisterMutation>
      {
        (register, {data, loading, error}) => {
          const onSubmit = ({email, password}) => {
            const input = {email, password}
            const variables = {input}
            register({variables})
              .then(({data}) => {
                const {signup} = data;
                activateAuth(signup);
              })
              .catch(error => {
                console.log("RegisterMutation: ", error.message);
              });
          };

          if (loading) {
            return <LoadingIndicator/>
          }

          const errorMsg = error && "Lo siento, el usuario ya ha sido registrado.";

          return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Registrarse"/>
        }
      }
    </RegisterMutation>

    <LoginMutation>
      {
        (login, {data, loading, error}) => {
          const onSubmit = ({email, password}) => {
            const input = {email, password}
            const variables = {input}
            login({variables})
              .then(({data}) => {
                const {login} = data;
                activateAuth(login);
              })
              .catch(error => {
                console.log("LoginMutation: ", error.message);
              });
          };

          if (loading) {
            return <LoadingIndicator/>
          }

          const errorMsg = error && "Lo siento, las credenciales no son correctas.";

          return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Iniciar sesión"/>
        }
      }
    </LoginMutation>

  </Fragment>
}
