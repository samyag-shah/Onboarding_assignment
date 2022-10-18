import { Col, Row } from "antd";

import "./steps.css";
import imagelogo from "../Asset/download.png";

const Title = ({ data, current }) => {
  const singleData = data[current];

  return (
    <Row>
      <Col>
        {/* if current step no. is not 3 then show only title and description 
        else show everything along side image as well */}
        {current !== 3 ? (
          <div className="title">
            <h1 className="first__h1">{singleData.title}</h1>
            <p className="first__p">{singleData.description}</p>
          </div>
        ) : (
          <div className="last__title">
            <div className="svg__div">
              <img src={imagelogo} alt="success" width="40px" height="40px" />
            </div>
            <h1 className="second__h1">{singleData.title}</h1>
            <p className="second__p">{singleData.description}</p>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Title;
