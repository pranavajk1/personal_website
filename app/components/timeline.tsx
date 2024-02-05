"use client";
import React, { useRef, useEffect, useState } from "react";
import promethiumLogo from "public/blackLogoP.png";
import accentureLogo from "public/accentureLogo.png";
import macLogo from "public/macLogo.png";
import { SelectOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import Image from "next/image";

export default function Timeline() {
  const [showPromethiumModal, setPromethiumShowModal] = useState(false);
  const [showAccentureModal, setAccentureShowModal] = useState(false);
  const [showMacModal, setMacShowModal] = useState(false);
  return (
    <>
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="text-3xl md:text-4xl text-white text-weight-600 leading-normal md:leading-relaxed mb-2">
            Work Experience
          </p>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            Here's what I have been upto
          </p>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="border-2-2 border-yellow-555 absolute h-full border"
                style={{
                  right: "50%",
                  border: "2px solid #484848",
                  borderRadius: "1%",
                }}
              ></div>
              <div
                className="border-2-2 border-yellow-555 absolute h-full border"
                style={{
                  left: "50%",
                  border: "2px solid #484848",
                  borderRadius: "1%",
                }}
              ></div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p
                    className="mb-3 text-base"
                    style={{ color: "#353839", fontSize: "small" }}
                  >
                    May 2023 - Present
                  </p>
                  <h4
                    className="mb-3 font-bold text-lg md:text-2xl"
                    style={{ color: "#FFF", fontSize: "large" }}
                  >
                    Promethium Inc.
                  </h4>
                  <p
                    className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                    style={{ color: "#979797", fontSize: "small" }}
                  >
                    Developed a sophisticated chatbot to enable users to easily
                    build complex data pipelines; created monitoring services
                    and front-end data integration features to improve data
                    management. {"   "}{" "}
                    {
                      <SelectOutlined
                        onClick={() => setPromethiumShowModal(true)}
                      />
                    }
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <p
                    className="mb-3 text-base"
                    style={{ color: "#353839", fontSize: "small" }}
                  >
                    September 2020 - August 2022
                  </p>
                  <h4
                    className="mb-3 font-bold text-lg md:text-2xl"
                    style={{ color: "#FFF", fontSize: "large" }}
                  >
                    Accenture Solutions Pvt. Ltd.
                  </h4>
                  <p
                    className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                    style={{ color: "#979797", fontSize: "small" }}
                  >
                    Architected an Angular SaaS app with .NET Core back-end to
                    assess software practices; developed APIs and dynamic forms
                    to facilitate customizable assessments. {"   "}{" "}
                    {
                      <SelectOutlined
                        onClick={() => setAccentureShowModal(true)}
                      />
                    }
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <p
                    className="mb-3 text-base"
                    style={{ color: "#353839", fontSize: "small" }}
                  >
                    June 2019 - July 2019
                  </p>
                  <h4
                    className="mb-3 font-bold text-lg md:text-2xl"
                    style={{ color: "#FFF", fontSize: "large" }}
                  >
                    MAC Machine Tools and Automation
                  </h4>
                  <p
                    className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                    style={{ color: "#979797", fontSize: "small" }}
                  >
                    Designed an end-to-end IoT infrastructure to digitize
                    outdated manufacturing equipment. Sensors feed data to an
                    edge gateway that processes and transmits insights to cloud
                    analytics for tracking health metrics, predicting failures,
                    and driving preventative maintenance. This IoT automation
                    provides real-time visibility to optimize operations.{" "}
                    {"   "}{" "}
                    {<SelectOutlined onClick={() => setMacShowModal(true)} />}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={showPromethiumModal}
        onCancel={() => setPromethiumShowModal(false)}
        footer={null}
        title={
          <div className="flex flex-row">
            <Image
              src={promethiumLogo}
              alt="Promethium Logo"
              height={25}
              style={{ marginRight: "10px" }}
            />{" "}
            {" Promethium Inc."}
          </div>
        }
        closable
      >
        <div>
          <p>
            As a software developer at Promethium, I had the opportunity to work
            on impactful features that enabled more intuitive data analytics and
            visualization capabilities on our platform. My primary focus was on
            developing and integrating conversational interfaces using natural
            language processing to empower users to seamlessly explore and gain
            insights from data.
          </p>
          <br />
          <p>
            To achieve this, I first leveraged the RASA open source framework to
            architect a sophisticated conversational AI chatbot. Using RASA's
            libraries for natural language understanding and dialog management,
            I built the chatbot to understand user intents and context, ask
            clarifying questions, and guide users through complex data
            interactions.
          </p>
          <br />
          <p>
            I integrated this chatbot with a React-based front-end I developed
            to enable robust data visualization experiences. The React
            components I engineered allow users to visually explore the datasets
            and relationships defined through the conversational interface. I
            also implemented a natural language query parser that takes
            free-form user questions entered through the chatbot and
            automatically generates SQL queries against the underlying data
            sources
          </p>
          <br />
          <p>
            To facilitate scalable data ingestion from diverse sources, I built
            a React-based data integration feature that lets users select
            multiple sources and map fields. On the back-end, I leveraged AWS
            Beanstalk to securely and robustly load combined datasets into our
            Trino data warehouse for analysis.
          </p>
          <br />
          <p>
            Overall, my work at Promethium allowed me to apply my skills in NLP,
            React, AWS, and other technologies to develop innovative
            conversational Analytics that empowers users to unlock impactful
            insights from data through intuitive interfaces.
          </p>
        </div>
      </Modal>

      <Modal
        open={showAccentureModal}
        onCancel={() => setAccentureShowModal(false)}
        footer={null}
        title={
          <div className="flex flex-row">
            <Image
              src={accentureLogo}
              alt="Accenture Logo"
              height={25}
              style={{ marginRight: "10px" }}
            />{" "}
            {" Accenture Solutions Pvt. Ltd."}
          </div>
        }
        closable
      >
        <div>
          <p>
            At Accenture, I was part of a team that developed a SaaS application
            to assess software development practices. My primary focus was on
            architecting and developing the front-end using Angular and
            integrating it with a .NET Core back-end.
          </p>
          <br />
          <p>
            I designed and developed a dynamic form builder that allows
            administrators to create and customize assessments using a
            drag-and-drop interface. I also developed a suite of APIs to
            facilitate the dynamic forms and assessment data management.
          </p>
          <br />
          <p>
            To ensure the application was scalable and secure, I implemented
            best practices for Angular and .NET Core, including using Angular's
            reactive forms and .NET Core's JWT authentication.
          </p>
          <br />
          <p>
            My work at Accenture allowed me to apply my skills in Angular, .NET
            Core, and API development to develop a robust and customizable SaaS
            application that empowers organizations to assess and improve their
            software development practices.
          </p>
        </div>
      </Modal>

      <Modal
        open={showMacModal}
        onCancel={() => setMacShowModal(false)}
        footer={null}
        title={
          <div className="flex flex-row">
            <Image
              src={macLogo}
              alt="MAC Logo"
              height={25}
              style={{ marginRight: "10px" }}
            />{" "}
            {" MAC Machine Tools and Automation"}
          </div>
        }
        closable
      >
        <div>
          <p>
            At MAC, I was part of a team that designed and developed an
            end-to-end IoT infrastructure to digitize outdated manufacturing
            equipment. My primary focus was on architecting and developing the
            IoT infrastructure and integrating it with cloud analytics.
          </p>
          <br />
          <p>
            I designed and developed an edge gateway that processes data from
            sensors and transmits insights to cloud analytics for tracking
            health metrics, predicting failures, and driving preventative
            maintenance. I also developed a suite of APIs to facilitate the edge
            gateway's data management.
          </p>
          <br />
          <p>
            To ensure the IoT infrastructure was scalable and secure, I
            implemented best practices for IoT and cloud analytics, including
            using MQTT for edge-to-cloud communication and AWS IoT Core for
            device management.
          </p>
          <br />
          <p>
            My work at MAC allowed me to apply my skills in IoT, edge computing,
            and cloud analytics to develop a robust and scalable IoT automation
            that empowers organizations to optimize their operations and
            maintenance.
          </p>
        </div>
      </Modal>
    </>
  );
}
