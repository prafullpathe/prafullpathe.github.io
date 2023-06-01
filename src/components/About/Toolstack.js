import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSplunk,
  SiSpringsecurity,
  SiGrafana,
} from "react-icons/si";
import {DiGoogleCloudPlatform } from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity /><p className="gatway">Sysdig</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleCloudPlatform /><p className="gatway">DPOD</p>
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <SiSplunk /><p className="gatway">Splunk</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana /><p className="gatway">Grafana</p>
      </Col>
         
    </Row>
  );
}

export default Toolstack;
