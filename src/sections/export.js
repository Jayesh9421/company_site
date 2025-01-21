import building from "../assets/building.svg";
import construction from "../assets/construction.svg";
import design from "../assets/design.svg";
import document from "../assets/document.svg";
import paint from "../assets/paint.svg";
import support from "../assets/support.svg";


import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";


export const allservices = [
  {
    icon: building,
    title: "SOFTWARE DEVELOPMENT",
    about:
      "We design and develop scalable software solutions tailored to your business needs.",
  },
  {
    icon: construction,
    title: "SYSTEM INTEGRATION",
    about:
      "Integrate diverse systems seamlessly to streamline operations and improve efficiency.",
  },
  {
    icon: design,
    title: "UI/UX DESIGN",
    about:
      "Create user-centric designs that enhance usability and provide a seamless experience.",
  },
  {
    icon: document,
    title: "TECHNICAL DOCUMENTATION",
    about:
      "Deliver comprehensive and clear documentation to ensure easy implementation and use.",
  },
  {
    icon: paint,
    title: "CUSTOM SOFTWARE SOLUTIONS",
    about:
      "Tailor-made applications designed to meet unique business requirements and goals.",
  },
  {
    icon: support,
    title: "24/7 TECH SUPPORT",
    about:
      "Round-the-clock technical support to ensure uninterrupted service and customer satisfaction.",
  },
];



export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "We carefully analyze client needs and create a comprehensive plan, defining the scope, timeline, and resources required for software development.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Our design team creates intuitive, user-friendly interfaces that ensure a seamless experience, blending creativity with functionality.",
  },
  {
    icon: FaRegBuilding,
    title: "development",
    about:
      "Our developers use the latest technologies to build scalable, robust software, ensuring that the product meets business needs and is efficient.",
  },
  {
    icon: FaSitemap,
    title: "deployment",
    about:
      "We ensure a smooth deployment of the software, followed by rigorous monitoring and maintenance to guarantee high performance and security.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
