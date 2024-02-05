"use client";
import React, { useRef, useEffect, useState } from "react";
import promethiumLogo from "public/blackLogoP.png";
import accentureLogo from "public/accentureLogo.png";
import macLogo from "public/macLogo.png";
import { Link } from "lucide-react";
import { Card } from "./card";

export default function Timeline() {
  return (
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
                  build complex data pipelines; created monitoring services and
                  front-end data integration features to improve data
                  management.
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
                  assess software practices; developed APIs and dynamic forms to
                  facilitate customizable assessments.
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
                  Designed an end-to-end IoT infrastructure to digitize outdated
                  manufacturing equipment. Sensors feed data to an edge gateway
                  that processes and transmits insights to cloud analytics for
                  tracking health metrics, predicting failures, and driving
                  preventative maintenance. This IoT automation provides
                  real-time visibility to optimize operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
