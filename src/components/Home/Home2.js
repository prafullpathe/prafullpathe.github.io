import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Prafull.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail} from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import MyModal from "./Mod";
import Callme from "./Callme";



function Home2() { 
  const [modalShow, setModalShow] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [callme, setCallme] = React.useState(false);
  return (

    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm Prafull, a passionate software engineer with expertise in 
            Gateway development,specifically DataPower administration and development,
             Apigee, and Apim.
             
              Graduating in 2021 with a computer science and engineering degree, I've gained valuable experience working
              with cutting-edge technologies. 

             I excel in XML and scripting languages, and have hands-on experience with Docker,
             Kubernetes, GitHub, and Tekton in the Google Cloud ecosystem.
             Proficient in C, Java, Python, and IOT, I enjoy solving
             complex problems and creating elegant solutions.

            Additionally, I'm skilled in using monitoring tools like 
            Splunk, Dpod, Grafana, and Sysdig to optimize system
            performance. 
            <br/>
            <br/>
             <b className="purple">As a software engineer,cloud engineer, 
            gateway developer and AI machine learning,</b>  I constantly
            expand my knowledge to stay current in this ever-evolving field.
           <br/>
           <br/>
              <i> 
                <b className="purple"> With enthusiasm and a drive for impactful solutions,
                        I invite you to explore my portfolio. 🤷‍♂️ </b>
              </i> 
            
           
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} id="myimg" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

            <li className="social-icons">
                <Callme show={callme} onHide={() => setCallme(false)} />
                <span
                  onClick={() => setCallme(true)}
                  className="icon-colour home-social-icons"
                >
                  <FaPhone />
                </span>
                <span className="link-text-css" onClick={() => setCallme(true)}>
                  <span style={{ opacity: 0 }}></span>
                </span>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/prafullpathe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           


              <li className="social-icons">
                <MyModal show={modalShow} onHide={() => setModalShow(false)} />
                <span
                  onClick={() => setModalShow(true)}
                  className="icon-colour home-social-icons"
                >
                  <SiGmail/>
                </span>
                <span
                  className="link-text-css"
                  onClick={() => setModalShow(true)}
                >
                  <span style={{ opacity: 0 }}></span>
                </span>
              </li>




              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prafullpathe-011299/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/humorist129"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
