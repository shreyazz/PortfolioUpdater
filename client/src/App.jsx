import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [link, setLink] = useState("");
  const getImgURL = (ev) => {
    setSelectedImage(ev.target.files[0]);
    const formdata = new FormData();
    formdata.append("image", ev.target.files[0]);
    fetch("https://api.imgur.com/3/upload", {
      method: "post",
      headers: {
        Authorization: "Client-ID 1e4107b48d3e3b7"
      },
      body: formdata
    })
      .then((data) => data.json())
      .then((data) => setLink(data.data.link));
  };
  return (
    <>
      {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group> */}
      <div>
        {selectedImage && (
          <div>
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br />

        <br />
        <input
          type="file"
          name="myImage"
          onChange={(ev) => {
            getImgURL(ev);
          }}
        />
      </div>

      <h2>Here is the link to your image</h2>

      <a href={link} target="_blank" rel="noreferrer">
        Link to image
      </a>

      <img src={link} alt="demo" />
    </>
  );
};

export default App;
