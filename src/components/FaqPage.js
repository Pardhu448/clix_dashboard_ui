import React from "react";
//import ReactDOM from "react-dom";
import FAQ from "./FAQ";
import Typography from '@material-ui/core/Typography';
import "./DropAuth.css";

export default function FaqPage() {
  return (
    <div>
    <Typography variant="h5"  align='justify' gutterBottom>
      FAQs
    </Typography>

      <FAQ>
        <FAQ.QAItem>
          <FAQ.Question answerId="q1">
            {(isOpen, onToggle) => {
              return (
                <>
                  <span>What is the primary source of data for these visualisations?  {isOpen ? <i class="fa fa-arrow-circle-up 2x"></i> :  <i class="fa fa-arrow-circle-down 2x"></i>} </span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q1" > All the data for tools and course modules are part of thin data gathered
          using syncthing from schools through internet and sometimes manually by our field tech team.
          Tools data corresponds to json files logged whenever a student accesses tools section of the
          platform and course module data are from progress csv's generated every hour capturing activity on
          modules part of the platform. </FAQ.Answer>

        </FAQ.QAItem>

        <FAQ.QAItem>
          <FAQ.Question answerId="q2">
            {(isOpen, onToggle) => {
              return (
                <>
                  <span>For some visualisations y-axis numbers dont make sense, is it true?  {isOpen ? <i class="fa fa-arrow-circle-up 2x"></i> :  <i class="fa fa-arrow-circle-down 2x"></i>}</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q2"> Yes, for some measures this is true. These specific cases are clearly mentioned in the visualisation notes and the documentation. In these cases the graph
      is meant to be used to compare numbers across different tools or courses in a given school.</FAQ.Answer>
        </FAQ.QAItem>

        <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  <span>How do we check if these numbers are correct? {isOpen ? <i class="fa fa-arrow-circle-up 2x"></i> :  <i class="fa fa-arrow-circle-down 2x"></i>} </span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> There is data source section in the website, where you can download underlying data for these visualisations.
           Datasets are granular enough to arrive at numbers on visualisations, can easily check for some cases manually in csv files.</FAQ.Answer>
        </FAQ.QAItem>

        {/* <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  <span>How do we check if these numbers are correct?</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> There is data source section in the website, where you can download underlying data for these visualisations.
           Datasets are granular enough to arrive at numbers on visualisations, can easily check for some cases manually in csv files.</FAQ.Answer>
        </FAQ.QAItem> */}

        <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  <span>What is it with top 50 schoools in each graph? {isOpen ? <i class="fa fa-arrow-circle-up 2x"></i> :  <i class="fa fa-arrow-circle-down 2x"></i>}</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> This is just not to clutter graph with insignificant numbers.
          We choose top fifty schools based on the measure under consideration.</FAQ.Answer>
        </FAQ.QAItem>

       <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  <span>Can we choose two tools or modules at a time to compare them ?  {isOpen ? <i class="fa fa-arrow-circle-up 2x"></i> :  <i class="fa fa-arrow-circle-down 2x"></i>}</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> Right now this is not available. We will try to accoomodate this in future.</FAQ.Answer>
        </FAQ.QAItem>


       <FAQ.QAItem>
          <FAQ.Question answerId="q3">
            {(isOpen, onToggle) => {
              return (
                <>
                  <span>How easy is it to replicate this visualisation for other data sets? {isOpen ? <i class="fa fa-arrow-circle-up 2x"></i> :  <i class="fa fa-arrow-circle-down 2x"></i>}</span>
                </>
              );
            }}
          </FAQ.Question>
          <FAQ.Answer id="q3"> Any data which can be expressed in this framework of stacked bar charts can
          be easily visualised with already existing D3 code.</FAQ.Answer>
        </FAQ.QAItem>

      </FAQ>
    </div>
  );
}
