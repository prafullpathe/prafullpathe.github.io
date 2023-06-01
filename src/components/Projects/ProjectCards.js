import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
 
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br/>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
       
      

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

      
      
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
