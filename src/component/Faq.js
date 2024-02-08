import React from "react";

import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <div class="Accord">
      <h6>FAQS</h6>
      <h2>
        <span class="yellow">frequently</span> <span class="blue">Asked</span>{" "}
        Questions
      </h2>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </Accordion.Header>
            <Accordion.Body>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </Accordion.Header>
            <Accordion.Body>Content for Accordion Item #2</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </Accordion.Header>
            <Accordion.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum{" "}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
