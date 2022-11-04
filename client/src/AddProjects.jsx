import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddProjects = () => {
  const [wip, setWip] = useState("false");
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    icon: "",
    workInProgress: "false",
    useLink: "",
    repoLink: "",
  });
  

  const setWIP = (event) => {
    console.log(event.target.value)
    setProjectData({...projectData, workInProgress: event.target.value})
  };

  const handleChange = (event) => {
    setProjectData({ ...projectData, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const proj = projectData;
    console.log(projectData)
    const headers = {
      "content-type": "application/json",
    };
    axios
      .post("https://portfolio-updater.vercel.app/api/addProject", projectData, {
        headers,
      })
      .then((response) => {
        console.log(response.status);
        if (response.status == 201) {
          toast.success("Project added! 🟢", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (response.status == 409) {
          toast.error("A similar project exists! 🔴 ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (response.status == 401) {
          toast.error("Some error occurred while adding projects! 🔴 ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <>
      <Container className="mt-3">
      <Link to={'/getProjects'}>Projects Page</Link>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <Form>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Title of Project</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title of the project"
              name="title"
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="A small description about the project"
              name="description"
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="formGridDescription">
            <Form.Label>Icon</Form.Label>
            <Form.Control
              placeholder="Link of the deployed project"
              name="icon"
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="formGridDescription">
            <Form.Label>Live Link / Use Link</Form.Label>
            <Form.Control
              placeholder="Link of the deployed project"
              name="useLink"
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>

          <Form.Group className="mt-3" controlId="formGridDescription">
            <Form.Label>Repo Link</Form.Label>
            <Form.Control
              placeholder="Link of the GitHub repository"
              name="repoLink"
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState" className="mt-3">
            <Form.Label>Work in Progress</Form.Label>
            <Form.Select
              defaultValue="false"
              name="workInProgress"
              onChange={(event) => setWIP(event)}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="mt-3"
            onClick={(event) => handleSubmit(event)}
          >
            Upload
          </Button>
        </Form>
      </Container>

      
    </>
  );
};

export default AddProjects;
