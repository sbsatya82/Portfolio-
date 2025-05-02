
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../assets/Projects/chatify.png";
import chatapp from "../../assets/Projects/chat-app.png";
import quoteapp from "../../assets/Projects/quote.png";
import portfolio from "../../assets/Projects/portfolio.png";
import ecommerce from "../../assets/Projects/ecommerce.png"


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
              imgPath={ecommerce}
              isBlog={false}
              title="Portfolio"
              description="Personal Portfolio using React JS"
              ghLink="https://github.com/sbsatya82/Portfolio-"
              demoLink="https://portfolio-olive-six-92.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Ecommerce Site"
              description="Ecommerce site using MERN"
              // ghLink="https://github.com/sbsatya82/Portfolio-"
              demoLink="https://mangalamedicare.store/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quoteapp}
              isBlog={false}
              title="Quotes-App"
              description="quotes-app using React JS"
              ghLink="https://github.com/sbsatya82/quotes-app"
              demoLink="https://quotes-app-by-sb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat-App"
              description="Chat App using Node JS, React JS, Socket.Io"
              ghLink="https://github.com/sbsatya82/chat-app"
              demoLink="https://chat-app-p2qm.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
