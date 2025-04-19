import React from "react";
import { useMutation } from "@tanstack/react-query";
import { API_URL, IMAGE_URL } from "../../utils/constants.js";
import { CloudUpload, Loader } from "lucide-react";

import "./upload.css";

const Upload = ({ data, setData }) => {
  const [file, setFile] = React.useState(null);

  //handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    setFile(formData);
  };
  // uploud image
  const {
    mutateAsync: uploadProjectImage,
    isPending,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: async (data) => {
      return await fetch(`${API_URL}/projects/upload`, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((image_url) => image_url);
    },
    onSuccess: (image_url) => {
      setData((prevState) => {
        return { ...prevState, image_url };
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return isPending ? (
    <Loader />
  ) : (
    <div className="container-upload">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          uploadProjectImage(file);
        }}
        encType="multipart/form-data"
        method="post"
      >
        <h3>Image upload</h3>
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
            disabled={isPending || isSuccess}
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
