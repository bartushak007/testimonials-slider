import React from "react";
import ReactDOM from "react-dom";
import "./components/testimonials/testimonials.scss";
import "./styles.css";
import Testimonials from "./components/testimonials/Testimonials";

const usersComments = [
  {
    url: "./images/1.jpg",
    name: "Petro",
    status: "immigrant",
    story: `React components implement a  
      method that takes input data and returns 
      what to display. This example uses an 
      XML-like syntax called JSX. Input data 
      that is passed into the component can be 
      accessed by  via this.props`,
    titleStory: "story ",
    afterwords: "afterwords"
  },
  {
    url: "./images/2.jpg",
    name: "Vasul",
    status: "prizoner",
    story: `React components implement a  
    method that takes input data and returns 
    what to display. This example uses an 
    XML-like syntax called JSX. Input data 
    that is passed into the component can be 
    accessed by  via this.props`,
    titleStory: "title sory",
    afterwords: "afterwords"
  },
  {
    url: "./images/3.jpg",
    name: "Ivan",
    status: "immigrant",
    story: `React components implement a  
    method that takes input data and returns 
    what to display. This example uses an 
    XML-like syntax called JSX. Input data 
    that is passed into the component can be 
    accessed by  via this.props`,
    titleStory: "title",
    afterwords: "afterwords"
  },
  {
    url: "./images/1.jpg",
    name: "Petro",
    status: "immigrant",
    story: `React components implement a  
      method that takes input data and returns 
      what to display. This example uses an 
      XML-like syntax called JSX. Input data 
      that is passed into the component can be 
      accessed by  via this.props`,
    titleStory: "story ",
    afterwords: "afterwords"
  },
  {
    url: "./images/2.jpg",
    name: "Vasul",
    status: "prizoner",
    story: `React components implement a  
    method that takes input data and returns 
    what to display. This example uses an 
    XML-like syntax called JSX. Input data 
    that is passed into the component can be 
    accessed by  via this.props`,
    titleStory: "title sory",
    afterwords: "afterwords"
  },
  {
    url: "./images/3.jpg",
    name: "Ivan",
    status: "immigrant",
    story: `React components implement a  
    method that takes input data and returns 
    what to display. This example uses an 
    XML-like syntax called JSX. Input data 
    that is passed into the component can be 
    accessed by  via this.props`,
    titleStory: "title",
    afterwords: "afterwords"
  }
];

const App = () => {
  return <Testimonials {...{ usersComments }} />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
