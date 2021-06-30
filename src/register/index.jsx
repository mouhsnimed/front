import React, { useState } from "react";
import CustomLoader from "../shared/Loader";
import Input from "../shared/Input";
import Select from "../shared/Select";
import { useForm } from "react-hook-form";
import API from "../request/api";

function Register() {
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
      url: "/person",
      data: fields,
    })
      .then(() => setLoader(false))
      .catch(() => setLoader(false));
  };
  return (
    <div>
      {loader && <CustomLoader />}
      <section class="w3l-about-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-about pt-5">
          <div class="container pt-lg-5 py-3"></div>
        </div>
      </section>
      <section class="w3l-breadcrumb">
        <div class="container">
          <ul class="breadcrumbs-custom-path">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li class="active">
              <span class="fa fa-angle-right mx-2" aria-hidden="true"></span>{" "}
              Register
            </li>
          </ul>
        </div>
      </section>
      <section class="w3l-contact-7 mt-3 mb-5" id="contact">
        <div class="contacts-9 pt-lg-5 pt-md-4">
          <div class="container">
            <div class="top-map">
              <div class="row map-content-9">
                <div class="col-lg-8">
                  <div class="contact-form">
                    <h5 class="mb-2">Créer un compte utilisateur</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div class="form-grid mb-3">
                        <div class="input-field">
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
                        <div class="input-field">
                          <Input
                            error={errors.prenoms}
                            type="text"
                            name="prenoms"
                            id="prenoms"
                            {...register("prenoms", {
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
                      <div class="form-grid">
                        <div class="input-field">
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
                        <div class="input-field">
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
                      <div class="input-field mt-3 mb-3">
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
                      <div class="input-field">
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
                        class="btn btn-primary btn-style mt-3"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-lg-4 cont-details">
                  <address>
                    <h5 class="">
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
