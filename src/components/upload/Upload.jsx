import React from "react";
import { useMutation } from "@tanstack/react-query";
import { API_URL, IMAGE_URL } from "../../utils/constants.js";
import { CloudUpload, Loader } from "lucide-react";

import "./upload.css";

const Upload = ({ data, setData }) => {
  const [file, setFile] = React.useState(null);
  // SUCCESS MESSAGE
  const [successMessage, setSuccessMessage] = React.useState(false);

  // ERROR MESSAGE
  const [errorMessage, setErrorMessage] = React.useState({
    error: false,
    message: "",
  });

  //handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    setFile(formData);
  };
  // uploud image
  const {
    mutateAsync: uploadFile,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch(`${API_URL}/upload`, {
        method: "POST",
        body: data,
        credentials: "include",
      }).then((res) => res.json());
    },
    onSuccess: (image) => {
      // set success message
      setSuccessMessage(true);
      // set error message
      setErrorMessage({
        error: false,
        message: "",
      });
      // set timeout for success message
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);

      if (image.status === 200) {
        setData((prevState) => {
          return { ...prevState, image_url: image.image_url };
        });
      }
    },
    onError: (error) => {
      setErrorMessage({
        error: true,
        message: error.message,
      });
      setTimeout(() => {
        setErrorMessage({
          error: false,
          message: "",
        });
      }, 3000);
    },
  });
  return isPending ? (
    <Loader />
  ) : isError ? (
    <p>{error.message}</p>
  ) : successMessage ? (
    <p>Image uploaded successfully</p>
  ) : errorMessage.error ? (
    <p>{errorMessage.message}</p>
  ) : (
    <div className="container-upload">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          return await uploadFile(file);
        }}
        encType="multipart/form-data"
        method="post"
      >
        <div className="upload">
          <label className="form-control-file" htmlFor="file">
            {isPending ? (
              <Loader />
            ) : isSuccess ? (
              <img src={`${IMAGE_URL}/${data.image_url}`} alt="image missing" />
            ) : (
              <CloudUpload size={150} color="lightgreen" />
            )}
            <input
              type="file"
              onChange={handleFileChange}
              id="file"
              name="file"
            />
          </label>
        </div>
        <div className="btn-group">
          <button
            className="btn btn-primary"
            disabled={isPending}
            type="submit"
          >
            {isSuccess ? "Successfuly uploaded" : "Upload"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
