import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiCss3,
  SiHtml5,
  SiPostgresql,
  SiAmazonaws,
} from "react-icons/si";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Techstack() {
  const skills = [
    { icon: <DiReact />, name: "React" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiPostgresql />, name: "SQL" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiAmazonaws />, name: "AWS" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-skill-${index}`}>{skill.name}</Tooltip>}
        >
          <Col xs={4} md={2} className="tech-icons">
            {skill.icon}
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Techstack;

