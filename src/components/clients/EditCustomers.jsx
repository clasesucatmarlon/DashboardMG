import React from "react";

import { Formik } from "formik";
import { firebaseRegistrarUsuario } from "../../utils/FirebaseUtil";
import { Link as RouterLink } from "react-router-dom";
import {
  Link,
  Typography,
} from "@material-ui/core";


export default function EditCustomers() {

  const registrarUsuario = (usuario) => {
    firebaseRegistrarUsuario(usuario.email, usuario.password);
    //e.preventDefault();
    setInterval(() => {
      window.location.href = "/edit";
    }, 2000);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
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
          if (!usuario.firstname) {
            errores.firstname = "Por favor ingrese un nombre !!!";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(usuario.firstname)) {
            errores.firstname = "El nombre sólo puede contener letras y espacios";
          }

          // VALIDAR APELLIDO
          if (!usuario.lastname) {
            errores.lastname = "Por favor ingrese un nombre !!!";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(usuario.lastname)) {
            errores.lastname = "El apellido sólo puede contener letras y espacios";
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
          <div className="editcustomers">
            <form action="" className="register" onSubmit={handleSubmit}>
              <h3>New customers</h3>
              <div className="register__inputs">
                <label htmlFor="nombre">Firstname: </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Jhon"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.firstname && errors.firstname && (
                  <div className="error">{errors.firstname}</div>
                )}
              </div>

              <div className="register__inputs">
                <label htmlFor="apellido">Lastname: </label>
                <input
                  type="text"
                  id="apellido"
                  name="lastname"
                  placeholder="Smith"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.lastname && errors.lastname && (
                  <div className="error">{errors.lastname}</div>
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
                <button type="submit">Enviar</button>
              </div>

            </form>
          </div>
        )}
      </Formik>
    </>
  );
}
