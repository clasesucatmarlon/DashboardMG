import React, {  useState } from 'react';

import { Link as RouterLink } from "react-router-dom";
import { Formik } from "formik";
import {
  Button,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { firebaseIniciarSesion } from "../../utils/FirebaseUtil";

const Login = () => {

  const [incorrecta, setIncorrecta] = useState(false)

  const iniciarSesion = async (credenciales) => {
    let sesionIniciada = await firebaseIniciarSesion(credenciales.email, credenciales.password)
    if (sesionIniciada) {
      window.location.href = "/sidebar";
    }
    else {
      setIncorrecta(true)
      setInterval(() => {
        window.location.href = "/";
      }, 2000);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(credenciales) => {
          iniciarSesion(credenciales);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <div className="login_container">
            <form className="login" onSubmit={handleSubmit}>
              <div>
                <h3>Sign in</h3>
              </div>

              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="email"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                fullWidth
                helperText={touched.password && errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
                variant="outlined"
              />

              <div className="button_login">
                <Button
                  className="button_login-color"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>

                {
                  incorrecta && 
                  <div className="credencialesIncorrectas">
                    <p>Incorrect credentials, try again</p>
                  </div> 
                }
              </div>

              <Typography color="textSecondary" variant="body1" className="link_signIn">
                Don&apos;t have an account?{" "}
                <Link
                  component={RouterLink}
                  to="/register"
                  underline="hover"
                >
                  Sign up
                </Link>
              </Typography>
            </form>
          </div>
        )}
      </Formik>

    </>
  );
};

export default Login;
