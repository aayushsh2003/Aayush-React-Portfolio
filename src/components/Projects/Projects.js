import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Akm from "../../Assets/Projects/AayushkiMehnat.png";
import Akp from "../../Assets/Projects/AayushkiPehchan.png"
import Akr from "../../Assets/Projects/AayushkiResume.png";
import Sms from "../../Assets/Projects/student_management_system.jpeg";




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
              imgPath={Akm}
              isBlog={false}
              title="Aayush Ki Mehnat"
              description="Aayush ki Mehnat is a website that provides students with access to notes, practical's, and other resources to help them prepare for exams. The website is specifically designed for students of RTU Kota affiliated colleges."
              ghLink="#"
              demoLink="https://aayushkimehnat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Akp}
              isBlog={false}
              title="Aayush Ki Pehchan"
              description="I built a custom portfolio website to showcase my skills and experience in web development. The website features a clean and modern design, with a focus on user experience. Visitors can easily navigate the site to learn more about my work, view my portfolio pieces, and contact me."
              ghLink="#"
              demoLink="https://aayush-ki-pehchan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Akr}
              isBlog={false}
              title="Aayush ki Resume"
              description="Aayush Sharma's comprehensive resume website showcasing his skills and experience in computer science, web development, and more."
              ghLink="#"
              demoLink="https://aayush-ki-resume.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sms}
              isBlog={false}
              title="Student Management System"
              description="The project is to develop a simple student management system using Python. The system should allow users to perform the following tasks: Add, edit, and delete student records, View a list of all students, Search for students by name or roll number."
              ghLink="#"
              demoLink="https://aayushkimehnat.vercel.app/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"  //    <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
