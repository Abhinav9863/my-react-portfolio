import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiDocker,
  SiTwilio,
} from "react-icons/si";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiTwilio />, name: "Twilio" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-tool-${index}`}>{tool.name}</Tooltip>}
        >
          <Col xs={4} md={2} className="tech-icons">
            {tool.icon}
          </Col>
        </OverlayTrigger>
      ))}
    </Row>
  );
}

export default Toolstack;

