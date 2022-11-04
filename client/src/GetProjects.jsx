import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const GetProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const projectsRes = await axios("https://portfolio-updater.vercel.app/api/getProjects");
      setProjects(projectsRes.data.projects);
    };
    getProjects();
  }, []);
  const deleteProject = async (title) => {
    console.log(title)
    const deleteRes = await axios.delete('https://portfolio-updater.vercel.app/api/deleteProject', { data: { title: title }});
    console.log(deleteRes)
  }
  return (
    <Container className="mt-5">
      <Link  to={"/"}>
        Add Projects
      </Link>
      <div className="card-wrapper mt-3">
        {projects.map((element, index) => {
          return (
            <Card  key={index} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{element.icon}</Card.Title>

                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
                <Button variant="danger" onClick={() => deleteProject(element.title)}>Delete</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default GetProjects;
