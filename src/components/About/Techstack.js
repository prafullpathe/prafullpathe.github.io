import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  

  DiPython,
  DiGithub,
  DiJava,
  DiDocker,
  
} from "react-icons/di";
import {
  SiKubernetes,
  SiTekton,
  SiC,
  SiIota,  
} from "react-icons/si";

import Aigee from "../../Assets/apigee.svg"
import xml from "../../Assets/xml-file.png"
import data from "../../Assets/datpower.jpeg"
import Api from "../../Assets/Api.png"


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
      <img className="Aigee" src={data}/>
      <p className="gatway">DataPower admin & development</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img className="Aigee" src={xml}/>
      <p className="gatway">XML Scripting</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img className="Aigee" id="apigee" src={Aigee}/>
      <p className="gatway">Apigee</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img className="Aigee" id="apim" src={Api}/>
      <p className="gatway" id="api">Api</p>
      </Col>

      <br/>
      <br/>
      <br/>

      <h1 className="project-heading">
          <strong className="purple">Cloud-Skillset </strong>
        </h1>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker /><p className="gatway">Docker</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes /><p className="gatway">Kubernetes</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGithub /><p className="gatway">Github</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTekton /><p className="gatway">Tekton</p>
      </Col>

      <br/>
        <h1 className="project-heading">
          <strong className="purple">Programming </strong>
        </h1>
        
      <Col xs={4} md={2} className="tech-icons">
        <SiC /><p className="gatway">C-Language</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava/><p className="gatway">Java</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython/><p className="gatway">Python</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiIota/><p className="gatway">IOT</p>
      </Col>
 
    </Row>
  );
}

export default Techstack;
