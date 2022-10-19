import { useState } from "react";

import Form from "./Form";
import Steps from "./Steps";
import Title from "./Title";

import "../CSS/formStep.css";
import logo from "../Asset/logo.png";

//Static data (Title and description)
const data = [
  {
    title: "Welcome! First things first...",
    description: "You can always change them later.",
  },
  {
    title: "Let's setup home for all your work",
    description: "You can always create another workspace later.",
  },
  {
    title: "How are you plane to use Eden?",
    description: "We'll Streamline your setup experience accordingly",
  },
  {
    title: "Congratulations, Eren!",
    description: "You have completed onboarding, you can start using Eden!",
  },
];

const FormSteps = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="main">
      {/* Showing main logo and header */}
      <div className="main__header">
        <div className="main__logo">
          <img src={logo} alt="success" width="30px" height="30px" />
        </div>
        <h1 className="main__header__h1">Eden</h1>
      </div>

      {/* Showing Steps */}
      <div className="main__div1">
        <Steps current={current} setCurrent={setCurrent} />
      </div>

      {/* Showing title and description */}
      <div className="main__div2">
        <Title data={data} current={current} />
        <Form current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
};

export default FormSteps;
