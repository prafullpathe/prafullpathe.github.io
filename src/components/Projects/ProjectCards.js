import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useCollapse } from 'react-collapsed'

function ProjectCards(props) {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
  return (
    <Card className="project-card-view">
 
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <br/>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.para}
        </Card.Text>
        
        <section {...getCollapseProps()}> {props.description}</section>
        
      <button className="project-btn"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    
    

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

      
      
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
