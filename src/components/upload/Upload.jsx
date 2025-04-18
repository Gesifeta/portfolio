import React from "react";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../../utils/constants.js";

const Upload = () => {
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
      });
    },
    onSuccess: (data) => {
      console.log("data === >", data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        uploadProjectImage(file);
      }}
      encType="multipart/form-data"
      method="post"
    >
      <div className="div-group">
        <label htmlFor="projectImage">Project Image</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="form-control-file"
          id="file"
          name="file"
        />
      </div>
      <div className="btn-group">
        <button className="btn btn-primary" type="submit">
          Upload
        </button>
      </div>
    </form>
  );
};

export default Upload;
