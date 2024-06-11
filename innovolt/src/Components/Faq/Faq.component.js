import Accordion from "../Accordian/Accordian.component";
import { FAQ_QUESTIONS_LIST } from "../../Utils/constants";
import "./Faq.style.scss";


const Faq = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-heading"> Frequently asked questions</h2>
      {FAQ_QUESTIONS_LIST?.map((list, index) => {
        const { question = "", answer = "", sublist = [] } = list;
        return (
          <Accordion title={question} key={index}>
            {answer && <p>{answer}</p>}
            {sublist.length > 0 && (
              <ul>
                {sublist?.map((sub) => {
                  return <li>{sub}</li>;
                })}
              </ul>
            )}
          </Accordion>
        );
      })}
    </div>
  );
};

export default Faq;
