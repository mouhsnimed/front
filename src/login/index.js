import React, { useState } from "react";
import CustomLoader from "../shared/Loader";
import Input from "../shared/Input";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import API from "../request/api";
import { useAuthState } from "../context/authContext";

function Login({ history }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loader, setLoader] = useState(false);

  // auth reducer
  const [authState, dispatch] = useAuthState();

  const onSubmit = (fields) => {
    setLoader(true);
    API({
      method: "post",
      url: "/login",
      data: fields,
    })
      .then((res) => {
        const {
          data: { token },
        } = res;

        // update context
        dispatch({
          type: "LOGIN_SUCCESS",
          token,
        });

        // redirect to home page
        history.push("/");

        // disable loader
        setLoader(false);
      })
      .catch((error) => {
        toast.error("Email ou mot de passe inccorect!");
        setLoader(false);
      });
  };
  return (
    <div>
      {loader && <CustomLoader />}
      <section className="w3l-about-breadcrumb">
        <div className="breadcrumb-bg breadcrumb-bg-about pt-5">
          <div className="container pt-lg-5 py-3"></div>
        </div>
      </section>
      <section className="w3l-breadcrumb">
        <div className="container">
          <ul className="breadcrumbs-custom-path">
            <li>
              <a href="index.html">Accueil</a>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              login
            </li>
          </ul>
        </div>
      </section>
      <section className="w3l-contact-7 mt-3 mb-5" id="login">
        <div className="contacts-9 pt-lg-5 pt-md-4">
          <div className="container">
            <div className="top-map">
              <div className="row map-content-9 login-form">
                <div className="col-lg-6">
                  <div className="contact-form">
                    <h5 className="mb-2">Se connecter</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="input-field mb-3">
                        <Input
                          error={errors.nom}
                          type="text"
                          name="email"
                          id="email"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Champ obligatoir",
                            },
                          })}
                          placeholder="Email"
                        />
                      </div>
                      <div className="input-field">
                        <Input
                          error={errors.password}
                          type="password"
                          name="password"
                          id="password"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "Champ obligatoir",
                            },
                          })}
                          placeholder="Mot de passe"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-style btn-block mt-4"
                      >
                        connexion
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
