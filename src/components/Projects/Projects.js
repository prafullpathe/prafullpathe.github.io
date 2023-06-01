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

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

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
             
              isBlog={false}
              title="DataPower Specialist"

              description="Extensively worked with DataPower Gateway and various gateway
               technologies including APIC, Apigee, and APIM.
Proficient in handling tickets and providing configuration support for DataPower.
Led DataPower migration projects to Virtual DataPower (vDP) using Container as a 
Service (CaaS) approach.
Currently working on creating a bot for organization, leveraging AI technologies to
 automate tasks and improve efficiency."
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
            
              title=" Chatbot for DataPower Support Queries using Embedding and Vertex AI
"
              description="Developed a chatbot solution for DataPower support queries
               using embedding techniques and Google Cloud's Vertex AI platform.
Conducted extensive research on embedding methodologies and natural language processing
 (NLP) techniques suitable for the support domain.
Utilized pre-trained language models and embeddings to capture the semantic meaning 
of support queries and generate accurate responses.
Leveraged Google Cloud's Vertex AI platform to train and fine-tune the
 chatbot model, optimizing its performance and accuracy.
Integrated the chatbot with relevant DataPower documentation and knowledge base to provide comprehensive and up-to-date answers.
Implemented a user-friendly interface allowing users to interact with the chatbot through a web or messaging platform.
Incorporated error handling mechanisms to gracefully handle queries that fall outside the chatbot's capabilities or require human intervention.
Integrated with data sources and APIs to retrieve real-time information and provide dynamic responses based on the current state of DataPower systems.
Implemented continuous learning mechanisms to gather user feedback and improve the chatbot's performance over time.
Collaborated with subject matter experts and support teams to validate the accuracy and effectiveness of the chatbot's responses.
Successfully deployed the chatbot, resulting in improved response times, increased self-service capabilities, and enhanced user satisfaction for DataPower support queries.
This project highlights your expertise in developing a chatbot using embedding techniques and Google Cloud's Vertex AI platform. It showcases your ability to leverage advanced NLP methodologies, integrate external data sources, and create a user-friendly interface. By successfully deploying the chatbot, you have demonstrated the value it brings to DataPower support by reducing response times and empowering users to find solutions to their queries efficiently."
          
            />
          </Col>

         

         
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
