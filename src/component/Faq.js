import React from "react";
import { useState } from "react";
function FAQ() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        <h6>FAQS</h6>
        <h3>
          <span class="yellow">Frequently</span>
          <span class="blue">asked questions</span>
        </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected == i ? " - " : " + "}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },

  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing.",
  },

  {
    question: "Lorem Ipsum is simply dummy text of the printing",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

export default FAQ;
