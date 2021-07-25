import React, { useState } from "react";
import CustomLoader from "../shared/Loader";
import Input from "../shared/Input";
import TextArea from "../shared/TextArea";
import Select from "../shared/Select";
import { useForm } from "react-hook-form";
import API from "../request/api";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

function AddAnnonce() {
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
      url: "/addAnnonce",
      data: fields,
    })
      .then(({ data }) => {
        toast.success("Annonce créée avec succès", { duration: 5000 });
        history.push(`/upload-files/${data.id}`);
      })
      .catch(() => {
        setLoader(false);
        toast.error(
          "Une erreur survenue lors de la saisie de l'annonce. Merci de ressayer",
          { duration: 5000 }
        );
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
              Publier une annonce
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
                    <h5 className="mb-2">Publier votre annonce</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Input
                            error={errors.titre}
                            type="text"
                            name="titre"
                            id="titre"
                            {...register("titre", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            placeholder="Titre d'annonce"
                          />
                        </div>
                        <div className="input-field">
                          <Input
                            error={errors.prix}
                            type="number"
                            name="prix"
                            id="prix"
                            {...register("prix", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            placeholder="Prix"
                          />
                        </div>
                      </div>
                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Select
                            error={errors.categorie_annonce_id}
                            name="categorie_annonce_id"
                            {...register("categorie_annonce_id", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Categorie" },
                              { value: "1", label: "Duplex" },
                              { value: "2", label: "Maison" },
                              { value: "3", label: "Villa" },
                              { value: "4", label: "Studio" },
                            ]}
                          />
                        </div>
                        <div className="input-field">
                          <Select
                            error={errors.ville}
                            name="ville"
                            {...register("ville", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Ville de bien" },
                              { value: "agadir", label: "Agadir" },
                              { value: "casablanca", label: "Casablanca" },
                              { value: "marrakech", label: "Marrakech" },
                              { value: "rabat", label: "Rabat" },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Input
                            error={errors.adresse}
                            name="adresse"
                            {...register("adresse", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            placeholder="L'adresse de bien"
                          />
                        </div>
                        <div className="input-field">
                          <Input
                            error={errors.localisation_geo}
                            type="text"
                            name="localisation_geo"
                            {...register("localisation_geo", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                              pattern: {
                                value:
                                  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
                                message: "Invalide localisation géographique",
                              },
                            })}
                            placeholder="localisation géographique"
                          />
                        </div>
                      </div>

                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Input
                            error={errors.superficie}
                            name="superficie"
                            {...register("superficie", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            placeholder="superficie (m2)"
                          />
                        </div>
                        <div className="input-field">
                          <Select
                            error={errors.nombre_chambre}
                            name="nombre_chambre"
                            {...register("nombre_chambre", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Nombre de chambres" },
                              { value: "1", label: "1" },
                              { value: "2", label: "2" },
                              { value: "3", label: "3" },
                              { value: "4", label: "4" },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Select
                            error={errors.nombre_bain}
                            name="nombre_bain"
                            {...register("nombre_bain", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Nombre de salle de bain" },
                              { value: "1", label: "1" },
                              { value: "2", label: "2" },
                              { value: "3", label: "3" },
                            ]}
                          />
                        </div>
                        <div className="input-field">
                          <Select
                            error={errors.nombre_salon}
                            name="nombre_salon"
                            {...register("nombre_salon", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Nombre de salon" },
                              { value: "1", label: "1" },
                              { value: "2", label: "2" },
                              { value: "3", label: "3" },
                            ]}
                          />
                        </div>
                      </div>

                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Select
                            error={errors.etage}
                            name="etage"
                            {...register("etage", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Etage" },

                              { value: "0", label: "0" },
                              { value: "1", label: "1" },
                              { value: "2", label: "2" },
                              { value: "3", label: "3" },
                              { value: "4", label: "4" },
                            ]}
                          />
                        </div>
                        <div className="input-field">
                          <Select
                            error={errors.etat_bien}
                            name="etat_bien"
                            {...register("etat_bien", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Etat de bien" },
                              { value: "nouveau", label: "nouveau" },
                              { value: "ancien", label: "Ancien" },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="form-grid mb-3">
                        <div className="input-field">
                          <Select
                            error={errors.type_annonce}
                            name="type_annonce"
                            {...register("type_annonce", {
                              required: {
                                value: true,
                                message: "Champ obligatoir",
                              },
                            })}
                            options={[
                              { value: "", label: "Type de bien" },
                              { value: "location", label: "Location" },
                              { value: "vente", label: "Vente" },
                            ]}
                          />
                        </div>
                        <div className="input-field">
                          <Select
                            error={errors.meuble}
                            name="meuble"
                            {...register("meuble", {
                              // required: {
                              //   value: true,
                              //   message: "Champ obligatoir",
                              // },
                            })}
                            options={[
                              { value: "", label: "Meublé" },
                              { value: 1, label: "Oui" },
                              { value: 0, label: "Non" },
                            ]}
                          />
                        </div>
                      </div>
                      <div className="input-field">
                        <TextArea
                          error={errors.description}
                          type="text"
                          name="description"
                          {...register("description", {
                            required: {
                              value: true,
                              message: "Champ obligatoir",
                            },
                          })}
                          placeholder="Description"
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

export default AddAnnonce;
