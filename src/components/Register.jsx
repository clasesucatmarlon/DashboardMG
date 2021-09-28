import React from "react";
import { useNavigate } from "react-router-dom";

import { Formik } from "formik";
import { firebaseRegistrarUsuario } from "../utils/FirebaseUtil";

export default function Register() {
  //const navigate = useNavigate()

  const registrarUsuario = (usuario) => {
    // console.log(usuario)
    firebaseRegistrarUsuario(usuario.email, usuario.password);
    //alert("El usuario se registró con éxito.")
    //navigate('/sidebar', {replace: true})

    //e.preventDefault();
    setInterval(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          password: "",
        }}
        onSubmit={(usuario, { resetForm }) => {
          resetForm();
          registrarUsuario(usuario);
          //console.log(usuario);
          //console.log("formulrio enviado");
        }}
        validate={(usuario) => {
          let errores = {};

          // VALIDAR NOMBRE
          if (!usuario.nombre) {
            errores.nombre = "Por favor ingrese un nombre !!!";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(usuario.nombre)) {
            errores.nombre = "El nombre sólo puede contener letras y espacios";
          }

          // VALIDAR EMAIL
          if (!usuario.email) {
            errores.email = "Por favor ingrese un email !!!";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              usuario.email
            )
          ) {
            errores.email =
              "El correo sólo puede contener letras, números, puntos, guiones y guión bajo";
          }

          // VALIDAR PASSWORD
          if (!usuario.password) {
            errores.password = "Por favor ingrese una contraseña !!!";
          }

          return errores;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <div className="register_container">
            <h1>Dashboard</h1>
            <form action="" className="register" onSubmit={handleSubmit}>
              <div className="register__inputs">
                <label htmlFor="nombre">Name: </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Jhon Smith"
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.nombre && errors.nombre && (
                  <div className="error">{errors.nombre}</div>
                )}
              </div>

              <div className="register__inputs">
                <label htmlFor="Email:">email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>

              <div className="register__inputs">
                <label htmlFor="Password:">Password: </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>

              <div className="register__inputs">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}
