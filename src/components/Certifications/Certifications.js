import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificationCards";
import Particle from "../Particle";
import C from "../../Assets/Certifications/Problem Solving Through Programming In C.jpg";
 import Python from "../../Assets/Certifications/The Joy of Computing using Python.jpg"
import Dssp from "../../Assets/Certifications/Developing Soft Skills and Personality.png";
import Essp from "../../Assets/Certifications/Enhancing Soft Skills and Personality.png";



function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certifications I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={C}
              isBlog={false}
              title="Problem Solving Through Programming In C"
              description="I'm excited to announce that I have earned a certificate from NPTEL for completing the course Problem Solving Through Programming in C by IIT Kharagpur! with 64% marks"
              ghLink="#"
              demoLink="https://www.linkedin.com/posts/aayush-sharma-a44062299_nptel-iitkharagpur-problemsolvingthroughc-activity-7130159982531997697-VMbJ?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Python}
              isBlog={false}
              title="The Joy of Computing using Python"
              description="I am excited to announce that I have earned a certificate from NPTEL for completing the course The Joy of Computing Using Python by IIT Madras with 70% marks!"
              ghLink="#"
              demoLink="https://www.linkedin.com/posts/aayush-sharma-a44062299_python-programming-nptel-activity-7130162060105019392-pvSl?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dssp}
              isBlog={false}
              title="Developing Soft Skills and Personality"
              description="I am excited to share that I have earned a certificate from NPTEL for completing the course Developing Soft Skills and Personality by IIT Kanpur with 66% marks!."
              ghLink="#"
              demoLink="https://www.linkedin.com/posts/aayush-sharma-a44062299_nptel-iitkanpur-developingsoftskillsandpersonality-activity-7130165578320752640-oRNu?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Essp}
              isBlog={false}
              title="Enhancing Soft Skills and Personality"
              description="I am excited to share that I have earned a certificate from NPTEL for completing the course Developing Soft Skills and Personality by IIT Kanpur with 76% marks!."
              ghLink="#"
              demoLink="#"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
