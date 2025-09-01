import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wildlife from "../../Assets/Projects/wildlife.png";
import plant from "../../Assets/Projects/PlantDisease.png";
import chatbot from "../../Assets/Projects/Medicalchatbot.png";
import Rater from "../../Assets/Projects/Rater.png";


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
              imgPath={Rater}
              isBlog={false}
              title="User Rating Application"
              description=" Developed a full-stack store rating application using React, Node.js, and PostgreSQL. The project features JWT authentication for role-based dashboards, live search/filtering, data visualizations, and a polished, themeable UI built with Material-UI."
              ghLink="https://github.com/Abhinav9863"
              demoLink="https://github.com/Abhinav9863/store-rater"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wildlife}
              isBlog={false}
              title="AI-Powered Wildlife Monitoring"
              description="A system that detects 17 wildlife species with 95% accuracy using a YOLOv8 model. The React dashboard provides real-time analytics and geolocation alerts via the Twilio API to aid in conservation and safety efforts."
              ghLink="https://github.com/Abhinav9863"
              demoLink="https://github.com/Abhinav9863"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="AI Medical Chatbot"
              description="A HIPAA-compliant medical chatbot developed with Python and TensorFlow. This AI assistant uses NLP to analyze patient symptoms, offer triage guidance, and securely integrate with electronic health records for seamless patient interaction."
              ghLink="https://github.com/Abhinav9863"
              demoLink="https://github.com/Abhinav9863"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plant}
              isBlog={false}
              title="Plant Leaf Disease Detection "
              description=" high-accuracy CNN model for early diagnosis of plant diseases from leaf images. This tool supports farmers by enabling rapid identification and enhancing crop management, using Python and advanced image processing techniques."  
            />
          </Col>

          {/* <Col md={4} className="project-card">
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
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
