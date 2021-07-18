import { useFilePicker } from "use-file-picker";
import React, { useState } from "react";
import API from "../request/api";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import CustomLoader from "../shared/Loader";

export default function FilePicker() {
  const [loader, setLoader] = useState(false);
  const params = useParams();
  const [
    openFileSelector,
    { filesContent, plainFiles, loading, errors, clear },
  ] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 8, min: 3 },
    maxFileSize: 10,
    imageSizeRestrictions: {
      maxHeight: 2300, // in pixels
      maxWidth: 2300,
      minHeight: 200,
      minWidth: 400,
    },
  });

  const uploadHandler = () => {
    setLoader(true);
    let formData = new FormData();

    formData.append("annonce_id", params.id);

    for (let index = 0; index < plainFiles.length; index++) {
      formData.append(`images_${index}`, plainFiles[index]);
    }

    API(
      {
        method: "post",
        url: "/uploadFiles",
        data: formData,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
      .then(({ data }) => {
        toast.success("Les images ont été enregistrées avec succès", {
          duration: 5000,
        });
        setLoader(false);
        clear();
        // history.push(`/upload-files/${data.id}`);
      })
      .catch(() => {
        setLoader(false);
        toast.error(
          "Une erreur s'est produite lors de l'enregistrement des images. Veuillez réessayer",
          {
            duration: 5000,
          }
        );
      });
  };

  if (errors.length) {
    return (
      <div>
        <button onClick={() => openFileSelector()}>
          Une erreur s'est produite, réessayez !
        </button>
        {errors[0].name && (
          <p className="input-error">{errors[0].name.toUpperCase()} </p>
        )}
        {errors[0].fileSizeTooSmall && (
          <p className="input-error">La taille du fichier est trop petite !</p>
        )}
        {errors[0].fileSizeToolarge && (
          <p className="input-error">La taille du fichier est trop grande !</p>
        )}
        {errors[0].readerError && (
          <p className="input-error">
            Pun problème est survenu lors de la lecture du fichier !
          </p>
        )}
        {errors[0].maxLimitExceeded && (
          <p className="input-error">
            Vos avez depasser le nombre des images autorisé (8images)
          </p>
        )}
        {errors[0].minLimitNotReached && (
          <p className="input-error">
            Vous devez telecharger au minimum 3 images
          </p>
        )}
        {errors[0].imageHeightTooSmall && (
          <p className="input-error">Hauteur de l'image est trop petite</p>
        )}
        {errors[0].imageWidthTooSmall && (
          <p className="input-error">Largeur de l'image est trop petite</p>
        )}
        {errors[0].imageHeightTooBig && (
          <p className="input-error">Hauteur de l'image est trop grand</p>
        )}
        {errors[0].imageWidthTooBig && (
          <p className="input-error">Largeur de l'image est trop petite</p>
        )}
      </div>
    );
  }

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <div>
      {loader && <CustomLoader />}
      <button onClick={() => openFileSelector()}>Select files </button>
      <div className="file-container">
        {filesContent.map((file, index) => (
          <div className="annonce-file" key={index}>
            {/* <h4>{file.name}</h4> */}
            <img alt={file.name} src={file.content}></img>
            <br />
          </div>
        ))}
      </div>
      {filesContent.length ? (
        <span onClick={uploadHandler} className="btn btn-style btn-primary">
          <i className="fa fa-upload" aria-hidden="true"></i>
          Sauvgarder vos fichiers
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
