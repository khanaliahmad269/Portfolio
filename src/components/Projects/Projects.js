import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chicken Disease Classification Model "
              description="A classification Bot which takes in the chicken fecal image and detects weather the chicken has coccidioses diseas or not."
              ghLink="https://github.com/khanaliahmad269/chichken_disease_detection"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Financial Agent"
              description="My Personal Ai chatbot whick helps in making financial decision."
              ghLink="https://github.com/khanaliahmad269/financial_Agent"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mechonics chatbot"
              description="An Ai chatbot for a mechanical workshop which "
              ghLink="https://github.com/khanaliahmad269/Mechanical_Eng_chatbot"
              demoLink="https://mechonics.streamlit.app"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
