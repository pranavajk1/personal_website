"use client";
import { Navigation } from "../components/nav";
import promethiumLogo from "public/blackLogoP.png";

export default function Work() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="overflow-y-auto">
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
          <ol className="absolute border-s border-gray-200 dark:border-gray-700 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <li className="mb-10 ms-11">
              <span className="absolute flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full -start-6 ring-8 ring-white dark:ring-gray-500 dark:bg-gray-200">
                <img
                  src={promethiumLogo.src}
                  alt="Promethium"
                  width="28"
                  height="28"
                />
              </span>
              <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Promethium Inc.
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
                    Full Time
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  May 2023 - Present
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  As a software developer at Promethium, I had the opportunity
                  to work on impactful features that enabled more intuitive data
                  analytics and visualization capabilities on our platform. My
                  primary focus was on developing and integrating conversational
                  interfaces using natural language processing to empower users
                  to seamlessly explore and gain insights from data.
                </p>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  To achieve this, I first leveraged the RASA open source
                  framework to architect a sophisticated conversational AI
                  chatbot. Using RASA's libraries for natural language
                  understanding and dialog management, I built the chatbot to
                  understand user intents and context, ask clarifying questions,
                  and guide users through complex data interactions.
                </p>

                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  I integrated this chatbot with a React-based front-end I
                  developed to enable robust data visualization experiences. The
                  React components I engineered allow users to visually explore
                  the datasets and relationships defined through the
                  conversational interface. I also implemented a natural
                  language query parser that takes free-form user questions
                  entered through the chatbot and automatically generates SQL
                  queries against the underlying data sources
                </p>

                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  To facilitate scalable data ingestion from diverse sources, I
                  built a React-based data integration feature that lets users
                  select multiple sources and map fields. On the back-end, I
                  leveraged AWS Beanstalk to securely and robustly load combined
                  datasets into our Trino data warehouse for analysis.
                </p>

                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Overall, my work at Promethium allowed me to apply my skills
                  in NLP, React, AWS, and other technologies to develop
                  innovative conversational Analytics that empowers users to
                  unlock impactful insights from data through intuitive
                  interfaces.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
