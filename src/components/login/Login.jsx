import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { firebaseIniciarSesion } from "../../utils/FirebaseUtil";

const Login = () => {

  const iniciarSesion = async (credenciales) => {
    let sesionIniciada = await firebaseIniciarSesion(credenciales.email, credenciales.password)
    if (sesionIniciada) {
      window.location.href = "/sidebar";
    }
    else {
      const incorrectas = `<p>Credenciales incorrectas</p>`
      alert('Credenciales incorrectas')
      window.location.href = "/";
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "demo@devias.io",
          password: "Test123",
        }}
        onSubmit={(credenciales) => {
          iniciarSesion(credenciales);

          // navigate('/app/dashboard', { replace: true });
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
              <Box sx={{ mb: 3 }}>
                <Typography color="textPrimary" variant="h3">
                  Sign in
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2">
                  Sign in on the internal platform
                </Typography>
              </Box>

              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
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
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
              </div>
              {/* <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign in now
                </Button>
              </Box> */}

              <Typography color="textSecondary" variant="body1">
                Don&apos;t have an account?{" "}
                <Link
                  component={RouterLink}
                  to="/register"
                  variant="h6"
                  underline="hover"
                >
                  Sign up
                </Link>
              </Typography>
            </form>
          </div>
        )}
      </Formik>
      {/* </Container> */}
      {/* </Box> */}
    </>
  );
};

export default Login;
