import React, { useEffect, useState } from "react";

import { Button, Form, Card, Input, Col, Row } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";

import "../CSS/form.css";

const { Meta } = Card;

const FormSteps = ({ current, setCurrent }) => {
  const [cardSelect, setCardSelect] = useState();
  const [cardError, setCardError] = useState();

  // Changes optional Field in step 2 according to change in ui
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();

  const onFinish = () => {
    //Check if there is no selection of card
    if (current === 2 && !cardSelect) {
      setCardError("Please select one option (card)");
      return;
    }

    //Move ahead if there are card selection
    setCardError("");

    //Go to next step
    if (current !== 3) {
      setCurrent(current + 1);
    }
  };

  const content = () => {
    if (current === 0) {
      return (
        <>
          <Row>
            <Col>
              <div>
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your fullname!",
                    },
                  ]}
                >
                  <Input placeholder="Steve Jobs" />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                label="Display Name"
                name="displayName"
                rules={[
                  {
                    required: true,
                    message: "Please input your display name!",
                  },
                ]}
              >
                <Input placeholder="Steve" />
              </Form.Item>
            </Col>
          </Row>
        </>
      );
    } else if (current === 1) {
      return (
        <>
          <Row>
            <Col>
              <div>
                <Form.Item
                  label="Workspace Name"
                  name="workspaceName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your workspace name!",
                    },
                  ]}
                >
                  <Input placeholder="Eden" />
                </Form.Item>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item label="Workspace URL (optional)" name="workSpaceUrl">
                {width > 400 ? (
                  <Input addonBefore="www.eden.com/" placeholder="Example" />
                ) : (
                  <Input placeholder="www.eden.com/" />
                )}
              </Form.Item>
            </Col>
          </Row>
        </>
      );
    } else if (current === 2) {
      return (
        <>
          <div className="card-parent">
            <Card
              onClick={() => {
                setCardSelect(1);
                setCardError("");
              }}
              cover={<UserOutlined className="icon" />}
              className={cardSelect === 1 ? "card blue_class" : "card"}
            >
              <Meta
                title="For myself"
                description="Write better, Think more clearly, Stay organized."
              />
            </Card>

            <Card
              className={cardSelect === 2 ? "card blue_class" : "card"}
              onClick={() => {
                setCardSelect(2);
                setCardError("");
              }}
              cover={<TeamOutlined className="icon" />}
            >
              <Meta
                title="For myself"
                description="Write better, Think more clearly, Stay organized."
              />
            </Card>
          </div>
          <div className="error">{cardError}</div>
        </>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={false}
      className="form"
    >
      {/* Show content of card dynamically  */}
      {content()}

      {/* common button */}
      <Row>
        <Col>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="submit__button"
              block
            >
              {current === 3 ? "Launch Eden" : "Create Workspace"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormSteps;
