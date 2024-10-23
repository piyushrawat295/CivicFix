import React, { useState } from "react";

const FAQs = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          {/* First Accordion */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeAccordion === 1 ? "active bg-indigo-50" : ""
            }`}
            id="basic-heading-one-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(1)}
              aria-controls="basic-collapse-one-with-arrow"
            >
              <h5>How does the Citizen Engagement Platform work?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                  activeAccordion === 1 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-one-with-arrow"
              className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeAccordion === 1 ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby="basic-heading-one-with-arrow"
              style={{
                overflowY: "auto",
                maxHeight: activeAccordion === 1 ? "500px" : "0px",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                The platform allows citizens to submit issues with details and
                images. These issues are visible to government officials on their
                dashboards. Officials can respond with images and text, and
                citizens can mark issues as "Resolved," "Pending," or "Not
                Satisfied." If unresolved, the issue goes back to the officials for further action.
              </p>
            </div>
          </div>

          {/* Second Accordion */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeAccordion === 2 ? "active bg-indigo-50" : ""
            }`}
            id="basic-heading-two-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(2)}
              aria-controls="basic-collapse-two-with-arrow"
            >
              <h5>How can I log in to the Citizen Engagement Platform?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                  activeAccordion === 2 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-two-with-arrow"
              className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeAccordion === 2 ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby="basic-heading-two-with-arrow"
              style={{
                overflowY: "auto",
                maxHeight: activeAccordion === 2 ? "500px" : "0px",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                You can log in using your registered email address and password.
                Government officials and users have different dashboards based on
                their roles.
              </p>
            </div>
          </div>

          {/* Third Accordion */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeAccordion === 3 ? "active bg-indigo-50" : ""
            }`}
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(3)}
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>Can I track the progress of my submitted issue?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                  activeAccordion === 3 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeAccordion === 3 ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby="basic-heading-three-with-arrow"
              style={{
                overflowY: "auto",
                maxHeight: activeAccordion === 3 ? "500px" : "0px",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                Yes, once your issue is submitted, you can track its progress
                through your dashboard. You’ll also receive responses from the
                concerned authorities when they update your issue.
              </p>
            </div>
          </div>

          {/* Fourth Accordion */}
          <div
            className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${
              activeAccordion === 4 ? "active bg-indigo-50" : ""
            }`}
            id="basic-heading-four-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
              onClick={() => toggleAccordion(4)}
              aria-controls="basic-collapse-four-with-arrow"
            >
              <h5>What happens if my issue is unresolved?</h5>
              <svg
                className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
                  activeAccordion === 4 ? "rotate-180" : ""
                }`}
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-four-with-arrow"
              className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeAccordion === 4 ? "max-h-screen" : "max-h-0"
              }`}
              aria-labelledby="basic-heading-four-with-arrow"
              style={{
                overflowY: "auto",
                maxHeight: activeAccordion === 4 ? "500px" : "0px",
              }}
            >
              <p className="text-base text-gray-900 leading-6">
                If your issue is unresolved, it will return to the government
                dashboard for further action. You can track it and continue to
                engage with the concerned officials until the issue is resolved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
