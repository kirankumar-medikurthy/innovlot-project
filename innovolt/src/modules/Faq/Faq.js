import React, { useState } from "react";
import { FAQ_QUESTIONS_LIST } from "../../constants/Faq";
import style from "./Faq.module.scss";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const renderAccordion = (faqData, index) => {
    const { question = "", answer = "", sublist = [] } = faqData;
    return (
      <div className={style.accordionitem} key={index}>
        <div
          className={style.accordiontitle}
          onClick={() => toggleAccordion(index)}
        >
          {question && <h2>{question}</h2>}
          <span>{openIndex === index ? "-" : "+"}</span>
        </div>
        {openIndex === index && (
          <div className={style.accordioncontent}>
            {answer && <p>{answer}</p>}
            {sublist.length > 0 && (
              <ul>
                {sublist?.map((sub) => {
                  return <li>{sub}</li>;
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      {FAQ_QUESTIONS_LIST?.map((question, index) =>
        renderAccordion(question, index)
      )}
    </>
  );
};

export default Faq;
