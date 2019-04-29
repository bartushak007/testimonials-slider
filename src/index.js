import React from "react";
import ReactDOM from "react-dom";
import "./components/testimonials/testimonials.scss";
import "./styles.css";
import Testimonials from "./components/testimonials/Testimonials";

const usersComments = [
  {
    url: "",
    name: "Petro",
    status: "immigrant",
    story: "full story",
    titleStory: "story ",
    afterwords: "afterwords"
  },
  {
    url: "",
    name: "Vasul",
    status: "prizoner",
    story: "story",
    titleStory: "title sory",
    afterwords: "afterwords"
  },
  {
    url: "",
    name: "Ivan",
    status: "immigrant",
    story: "amazing story",
    titleStory: "title",
    afterwords: "afterwords"
  },
  {
    url: "",
    name: "Petro",
    status: "immigrant",
    story: "full story",
    titleStory: "story ",
    afterwords: "afterwords"
  },
  {
    url: "",
    name: "Vasul",
    status: "prizoner",
    story: "story",
    titleStory: "title sory",
    afterwords: "afterwords"
  },
  {
    url: "",
    name: "Ivan",
    status: "immigrant",
    story: "amazing story",
    titleStory: "title",
    afterwords: "afterwords"
  }
];

const App = () => {
  return <Testimonials {...{ usersComments }} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
