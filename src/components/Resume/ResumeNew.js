import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {

  return (
    <div className="mb-5">
      <Container fluid className="resume-section">

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="https://drive.google.com/file/d/119GNvpb7PdBaAjcrclUJpTheYQMSmaAF/view?usp=sharing" target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
