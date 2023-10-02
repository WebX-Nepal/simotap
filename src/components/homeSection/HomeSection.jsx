import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import {
  Accordion,
  Section1,
  Section2,
  Section4,
  Section5,
  Section6,
  Section8,
} from "../homeComponent/index.js";

import "./homeSection.css";
import { Link } from "react-router-dom";
import Section3 from "../homeComponent/section3/Section3.jsx";

function HomeSection() {
  

  const [accordions, setAccordions] = useState([
    {
      id: 1,
      title: "How do SIMOTAP products work?",
      content:
        "SIMOTAP products are innovative digital business cards designed to make sharing and exchanging your contact information quicker and more effective. With a simple tap on an NFC-enabled phone a link with your contact details will instantly open, ready to be saved.",
      isOpen: false,
    },
    {
      id: 2,
      title: "How do I add my details?",
      content:
        "SIMOTAP products are innovative digital business cards designed to make sharing and exchanging your contact information quicker and more effective. With a simple tap on an NFC-enabled phone a link with your contact details will instantly open, ready to be saved.",
      isOpen: false,
    },
    {
      id: 3,
      title: "Does the other person need an app to receive my info?",
      content:
        "SIMOTAP products are innovative digital business cards designed to make sharing and exchanging your contact information quicker and more effective. With a simple tap on an NFC-enabled phone a link with your contact details will instantly open, ready to be saved.",
      isOpen: false,
    },
    {
      id: 4,
      title: "What are the benefits of using SIMOTAP digital business cards?",
      content:
        "SIMOTAP products are innovative digital business cards designed to make sharing and exchanging your contact information quicker and more effective. With a simple tap on an NFC-enabled phone a link with your contact details will instantly open, ready to be saved.",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionId) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion) => ({
        ...accordion,
        isOpen: accordion.id === accordionId ? !accordion.isOpen : false,
      }))
    );
  };
  return (
    <div className="homeSection">
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4 />
      <Section5 />
      <Section6 />
      <section className="section7">
        <h1>Frequently Asked Questions</h1>
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.id}
            title={accordion.title}
            content={accordion.content}
            isOpen={accordion.isOpen}
            onClick={() => toggleAccordion(accordion.id)}
          />
        ))}
      </section>
      <Section8 />
    </div>
  );
}

export default HomeSection;
