import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../assets/Projects/leaf.png";
import emotion from "../../assets/Projects/emotion.png";
import editor from "../../assets/Projects/codeEditor.png";
import chatify from "../../assets/Projects/chatify.png";
import suicide from "../../assets/Projects/suicide.png";
import bitsOfCode from "../../assets/Projects/blog.png";

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
              title="Portfolio"
              description="Personal Portfolio using React JS"
              ghLink="https://github.com/sbsatya82/Portfolio-"
              demoLink="https://portfolio-olive-six-92.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
