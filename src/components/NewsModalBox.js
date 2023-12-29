import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const NewsModalBox = ({ close, value }) => {
  const data = [
    {
      date: "October 2021 - October 2022",
      title:
        "Full Stack Developer",
      desc: [
        { p: "Worked with an Angular 11 / .NET Core API 3.0 / Azure SQL job board aggregator application portal system. Improved and expanded the job board search capabilities. The search utilized SQL Full Text search and dynamic Linq queries. Provide design, enhancement, and issue support. " }
      ]
    },
    {
      date: "August 2021 - February 2022",
      title:
        "Lead Full Stack E-Commerce Engineer",
      desc: [
        { p: "Full Stack Developer hired to add features and functionality to a Shopify E-Commerce Headless CMS. I worked as the head of the frontend development team in conjunction with a UI/UX designer who created wireframes for the store. Backend was done on PHP where I helped our backend developer with database work as well as developed microservices to enhance the speed and reliability. Front end tasks were accomplished using Javascript to create a more functional store that content management systems mostly lack. Communication tasks were completed using Slack, Jira, and Teams. I was also tasked with transforming the development team into an Agile environment." }
      ]
    },
    {
      date: "July 2019 - August 2021",
      title: "Full Stack Developer",
      desc: [
        { p: "Assigned to complete tasks on various teams within the company to build portal.cms.gov using Angular, React, Redux, and Node.js. The front end of this site was built using Angular 7, React, Redux, jQuery, Javascript, CSS, and Bootstrap. All projects had to be 508 compliant. Video project required custom voice controls for employees that can't use a keyboard. Back-end tasks were completed using C#, .NET core, and SQL. Amazon Lambda were used in conjunction with Amazon Lex to create a support chatbot for the application. We worked in an agile environment. All tasks were managed on Jira. Attended weekly sprint meetings and daily scrum meetings to prioritize our workflow. Project was built in a GIT repository which we accessed through Gitlab and Git Bash." }
      ]
    },
    {
      date: "February 2018 - June 2019",
      title: "Full Stack Developer",
      desc: [
        { p: "Hired to create features and fix bugs on Intra an enterprise level application with many monthly users. Intra is currently used by colleges, mail rooms, and by companies such as Disney and Cannon. The front end was built using React and Backbone.JS, jQuery, Javascript, CSS, and Bootstrap. The back end of the application was developed using ASP.NET, C#, and Visual Basic. Deep learning models were trained on video data to enable video cameras inside mailroom lockers to identify and differentiate QR codes and barcodes from packages placed inside the locker. To accomplish deep learning tasks we used: Python, Jupyter Notebook, MXNet, Tensorflow, Amazon Sage. Later, we used Tesseract OCR to read the packages serial number. Before performing OCR the image was processed using functions written in C#. Some of the services used devices (such as Io buttons or the Amazon Deep Lens) that were configured and programmed using the AWS console to interact with locker systems. Created API web calls using Amazon Lambda functions that used attributes such as the devices ID, video stream, and/or button click to interact with Intra's services. We were working in an agile environment. All tasks were managed on DevOps. We had weekly sprint meetings and daily scrum meetings to prioritize our workflow. Project was built in a GIT repository which we accessed through DevOps and Git Bash. UI's were designed from images generated in Adobe XD, and sketch." }
      ]
    },
    {
      date: "February 2017 - January 2018",
      title: "Full Stack Developer",
      desc: [
        { p: "Full Stack Developer for RA Tools for UAV. The web application enabled engineers to train machine learning models for accelerometry data without coding. The front end was built using Angular2.0, React, D3, jQuery, Javascript, CSS, and Bootstrap. The front end for the desktop application was created using C#, ArcObjects, Javascript, Angular 2.0, ArcMap API for Javacript, Python, ArcPy, ArcMap 10. 4/10. 5, and Arc Scene were used to develop a UI that enables GIS specialists to perform machine learning tasks on map data. The user is given a set of tools to label features on a map to train spatial machine learning models. These models could be trained and implemented on multiple layers of map data such as Lidar, Ortho. After training a model the application could automatically label and color any map data based off of the classes you trained the model on. Models are saved as a custom file(. RAI) and could later be used with the application. Machine learning services were written using C++, C#, OpenCV, and Mathlab and made available on our Linux server through API services written in Node.js which allows users to process machine learning jobs and store machine learning models on the cloud. Jobs were processed on a Linux server. " }
      ]
    },
    {
      date: "June 2014 - December 2016",
      title:"Agilent Technologies",
      desc: [
        { p: "Led nontechnical staff through a software requirement gathering process to formalize the reporting tool prototype Architected the first version of the tool using the U of A required survey software, custom HTML/CSS/JavaScript, and an excel VBA tool to generate the required reports Performed Business Request (BR) using C#, ASP.Net, WCF, MVC design patterns and JQuery.Provided user support." }
      ]

    },
    {
      date: "July 2013 - April 2014",
      title: "Data Art",
      desc: [
        { p: "Designed artefacts for functional and regression testing (test cases, checklists, etc.) Set up and carried out manual testing Liaised with clients to tailor testing procedures Wrote and submitted bug reports." }
      ]

    },
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="deebo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <p className="fn__cat">{d.date}</p>
                    <p className="fn__cat">{d.tag}</p>
                    <h3 className="fn__title">{d.title}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/blog/${index}.jpg`}
                      />
                    </div>
                    {d.desc.map((des) => (
                      <p key={i} className="fn__desc">
                        {des.p}
                      </p>
                    ))}

                  </div>
                )
            )}


          </div>

          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 5 : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 5 ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModalBox;
