import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./AwardCards";
import Particle from "../Particle";
import Ms from "../../Assets/Awards/Matematics_Standard.jpeg";
import Gq from "../../Assets/Awards/Ganga_Quest.jpeg"
import Lse from "../../Assets/Awards/Lok_Shabha_Election.jpeg";
import Pq from "../../Assets/Awards/Pcra_Quiz.png";
import Rscit from "../../Assets/Awards/Rscit.jpeg";
import Rvse from "../../Assets/Awards/Vidhan_Sabha_Election.jpeg";



function Awards() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Awards </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Awards I've worked got.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ms}
              isBlog={false}
              title="Matematics Standard"
              description="Certificate for outstanding performance and for being the top 0.1 % of successful candidates in Mathematics Standard."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rscit}
              isBlog={false}
              title="Rajasthan State Certificate in- Information Technology"
              description="Excited to share that I have earned a certificate in RS-CIT from Vardhman Mahaveer Open University (VMOU), Kota."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pq}
              isBlog={false}
              title="PCRA Quiz Competition 2019"
              description="Aayush Sharma's comprehensive resume website showcasing his skills and experience in computer science, web development, and more."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gq}
              isBlog={false}
              title="Ganga Quest 2021"
              description="I am grateful for the opportunity to have participated in Ganga Quest 2021, and I am honored to have been recognized as one of the top 25 winners. This certificate is a testament to my knowledge of the Ganga River and my commitment to protecting it."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lse}
              isBlog={false}
              title="Lok Sabha Election 2024"
              description="Excited to receive my voter certificate, a tangible reminder of my civic duty. I am committed to responsible citizenship and will cherish this certificate as a symbol of my first step into the world of active participation in our democracy."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rvse}
              isBlog={false}
              title="Rajasthan Vidhan Sabha Election"
              description="Excited to receive my voter certificate, a tangible reminder of my civic duty. I am committed to responsible citizenship and will cherish this certificate as a symbol of my first step into the world of active participation in our democracy."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Awards;
