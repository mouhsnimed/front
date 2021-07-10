import React, { useState } from "react";
import CustomLoader from "../shared/Loader";
import Input from "../shared/Input";
import Select from "../shared/Select";
import { useForm } from "react-hook-form";
import API from "../request/api";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loader, setLoader] = useState(false);
  const onSubmit = (fields) => {
    setLoader(true);
    API({
      method: "post",
      url: "/register",
      data: fields,
    })
      .then(() => {
        history.push("/login");
        setLoader(false);
        toast.success("Inscription réussie", { duration: 5000 });
      })
      .catch(() => {
        toast.error(
          "Une erreur survenue lors de l'inscription. Merci de ressayer",
          { duration: 5000 }
        );
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
              <a href="index.html">Home</a>
            </li>
            <li className="active">
              <span
                className="fa fa-angle-right mx-2"
                aria-hidden="true"
              ></span>{" "}
              Register
            </li>
          </ul>
        </div>
      </section>
      <section className="w3l-contact-7 mt-3 mb-5" id="contact">
        <div className="contacts-9 pt-lg-5 pt-md-4">
          <div className="container">
            <div className="top-map">
              <div className="row map-content-9">
                <div className="col-lg-8">
                  <div className="contact-form">
                    <h5 className="mb-2">Créer un compte utilisateur</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Input
                            error={errors.nom}
                            type="text"
                            name="nom"
                            id="nom"
                            {...register("nom", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                              // maxLength: 30,
                            })}
                            placeholder="Votre nom"
                          />
                        </div>
                        <div className="input-field">
                          <Input
                            error={errors.prenom}
                            type="text"
                            name="prenom"
                            id="prenom"
                            {...register("prenom", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                              // maxLength: 30,
                            })}
                            placeholder="Votre prenom"
                          />
                        </div>
                      </div>
                      <div className="form-grid">
                        <div className="input-field">
                          <Input
                            error={errors.numero}
                            type="number"
                            name="numero"
                            id="numero"
                            {...register("numero", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                              minLength: {
                                value: 10,
                                message: "minimum 10 chifres",
                              },
                              maxLength: {
                                value: 10,
                                message: "maxsimum 10 chifres",
                              },
                            })}
                            placeholder="numero de telephone"
                          />
                        </div>
                        <div className="input-field">
                          <Input
                            error={errors.email}
                            type="email"
                            name="email"
                            id="email"
                            {...register("email", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                              pattern: /^\S+@\S+$/i,
                            })}
                            placeholder="Adresse Email"
                          />
                        </div>
                      </div>
                      <div className="input-field mt-3 mb-3">
                        <Select
                          error={errors.type}
                          name="type"
                          {...register("type", {
                            required: {
                              value: true,
                              message: "Champ obligatoir",
                            },
                          })}
                          options={[
                            { value: "", label: "Vous etes un" },
                            { value: "1", label: "Shooter" },
                            { value: "2", label: "Particulier" },
                            { value: "3", label: "Professionnel" },
                          ]}
                        />
                      </div>
                      <div className="input-field">
                        <Input
                          error={errors.password}
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Mot de passe"
                          {...register("password", {
                            required: {
                              value: true,
                              message: "Champ obligatoir",
                            },
                            minLength: {
                              value: 6,
                              message: "minimum 6 chifres",
                            },
                            maxLength: {
                              value: 12,
                              message: "maximum 12 chifres",
                            },
                          })}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-style mt-3"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 cont-details">
                  <address>
                    <h5 className="">
                      C'est encore plus facile d'ajouter et de gérer vos
                      annonces!
                    </h5>
                    <p>
                      Ajoutez des photos, modifiez la description et le prix de
                      vos annonces existantes. Publiez de nouvelles annonces,
                      c'est encore plus facile et rapide!
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
