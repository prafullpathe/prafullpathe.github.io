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
          {/* <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
<<<<<<< HEAD
              title="DataPower Specialist"
              para="Extensively worked with DataPower Gateway and various gateway
               technologies including APIC, Apigee, and APIM.
Proficient in handling tickets and providing configuration support for DataPower.
Led DataPower migration projects to Virtual DataPower (vDP) using Container as a 
Service (CaaS) approach."
 
              description="Currently working on creating a bot for organization, leveraging AI technologies to
 automate tasks and improve efficiency."
=======
          
           
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
            
            
              title=" Chatbot for DataPower Support Queries using Embedding and Vertex AI
"
            para ="Developed a chatbot solution for DataPower support queries
               using embedding techniques and Google Cloud's Vertex AI platform.
Conducted extensive research on embedding methodologies and natural language processing
 (NLP) techniques suitable for the support domain."


 description="Utilized pre-trained language models and embeddings to capture the semantic meaning 
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
This project highlights your expertise in developing a chatbot using embedding techniques and Google Cloud's Vertex AI platform. It showcases your ability to leverage
 advanced NLP methodologies, integrate external data sources, and create a user-friendly
  interface. By successfully deploying the chatbot, you have demonstrated the value 
  it brings to DataPower support by reducing response times and empowering users to
   find solutions to their queries efficiently."
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
            
              title="DataPower Support and Configuration"

            para ="Provided expert support and configuration services for DataPower Gateway in a fast-paced, high-volume environment.
Acted as a primary point of contact for troubleshooting and resolving issues related to DataPower Gateway.
Handled a wide range of tickets and incidents, ensuring timely resolution
 and minimizing impact on critical business operations."


 description="Conducted thorough analysis of reported issues, identified root causes,
  and implemented effective solutions.
Collaborated with cross-functional teams, including developers and system administrators, to troubleshoot complex integration and connectivity problems.
Utilized scripting languages (such as XSLT and JavaScript) to customize DataPower
 configurations and implement business-specific requirements.
Actively monitored and maintained the performance and availability of DataPower Gateway, implementing proactive measures to optimize its operation.
Implemented security measures and best practices to ensure the integrity and 
confidentiality of data transmitted through DataPower.
Developed and maintained comprehensive documentation, including standard operating 
procedures and configuration guides, to facilitate efficient support and knowledge
 transfer.
Participated in on-call rotations and provided 24/7 support for critical incidents,
 ensuring continuous availability and minimal downtime.
In this project, I played a key role in providing top-notch support and configuration
 services for DataPower Gateway. Through my technical expertise, proactive 
 troubleshooting, and effective collaboration with various teams, I successfully
  addressed issues, minimized downtime, and optimized the performance of DataPower
   Gateway. My efforts contributed to the smooth functioning of critical business 
   operations and ensured the security and reliability of data transmission through 
   DataPower Gateway."
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            
            
              title=" DataPower Migration to Virtual DataPower using CaaS"
            para ="
Led the migration project to transition DataPower Gateway to Virtual DataPower (vDP) utilizing the Container as a Service (CaaS) approach.
Collaborated with cross-functional teams including infrastructure, operations, 
and development to ensure a seamless migration process.
"


 description="Conducted a thorough analysis of the existing DataPower architecture, identified potential challenges, and devised an effective migration strategy.
Created a detailed project plan outlining tasks, milestones, and timelines for a smooth execution.
Worked closely with stakeholders to define requirements, establish success criteria, and manage expectations throughout the project lifecycle.
Oversaw the setup and configuration of Virtual DataPower instances using CaaS technologies.
Conducted rigorous testing and validation to ensure the performance, stability, and security of the migrated environment.
Developed comprehensive documentation and conducted training sessions for operations and support teams to facilitate a smooth transition and ongoing maintenance.
Successfully completed the migration within the planned timeline, minimizing downtime and ensuring business continuity.
Achieved significant cost savings and improved scalability by leveraging the advantages of virtualized DataPower infrastructure.
This project involved the migration of DataPower Gateway to Virtual DataPower using Container as a Service (CaaS) approach. By leading this project, I demonstrated my ability to manage complex technical initiatives, collaborate with diverse teams, and deliver successful outcomes. The project's success resulted in a more scalable, cost-effective, and streamlined infrastructure for the organization.





User
And other should be datapower support or not
"
          
            />
          </Col>

       
         

         

         
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
