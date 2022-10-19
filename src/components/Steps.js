import { Steps, Row, Col } from "antd";

import "../CSS/title.css";

const { Step } = Steps;

const AllSteps = ({ current, setCurrent }) => {
  return (
    <Row>
      <Col>
        {/* Showing Stepper */}
        <Steps current={current} onChange={(current) => setCurrent(current)}>
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
      </Col>
    </Row>
  );
};

export default AllSteps;
