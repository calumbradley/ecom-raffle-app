import React, { useState } from "react";

const QuestionAnswer = ({
  question,
  answers,
  companyAddress,
  currency,
  pricePerEntry,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [entryType, setEntryType] = useState("online"); // 'online' or 'postal'

  return (
    <div className="space-y-4 p-4 border border-gray-200 rounded-lg relative flex flex-col h-[350px]">
      {/* Price Display */}
      <div className="flex items-end mb-2">
        <span className="text-2xl font-bold text-palette-primary">
          {currency}
          {pricePerEntry}
        </span>
        <span className="text-sm text-gray-500 ml-1">Per Entry</span>
      </div>

      {/* Content */}
      <div
        className={`flex-1 ${
          entryType === "postal" ? "overflow-y-auto" : ""
        } pb-16 mt-4`} // Adjusted padding-bottom and margin-top for more spacing
      >
        {entryType === "online" ? (
          <>
            {/* Question */}
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
              {question}
            </h3>

            {/* Answers */}
            <div className="flex flex-col space-y-2">
              {answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(answer)}
                  className={`border text-md font-medium py-1 leading-relaxed flex justify-center items-center focus:outline-none w-full hover:bg-gray-100 rounded-full font-primary transition-colors
                    ${
                      selectedAnswer === answer
                        ? "border-palette-primary text-palette-primary bg-gray-200"
                        : "border-gray-300 text-gray-700"
                    }`}
                >
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-sm text-gray-700 space-y-4">
            <p>
              You may enter the competition for free by sending your entry on an
              unenclosed postcard by first class post to the Promoter at the
              following address:
            </p>
            <p className="font-semibold mt-2">{companyAddress}</p>
            <p className="mt-4">Please include the following information:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>your full name;</li>
              <li>your address;</li>
              <li>a contact telephone number and email address;</li>
              <li>
                the Competition you are entering and your answer to the
                Competition Question.
              </li>
            </ul>
            <p className="mt-4">
              Incomplete or illegible entries will be disqualified.
            </p>
            <p className="mt-4">
              You may make multiple free entries for any competition (up to any
              limit placed on entries by the Promoter) but each free entry must
              be submitted and posted to the Promoter separately. Bulk entries
              in one envelope will not be accepted as multiple entries, and if a
              bulk entry is received, it will be counted as one single entry.
            </p>
            <p className="mt-4">
              By entering the competition, you are confirming that you are
              eligible to enter and accept these terms and conditions.
            </p>
            <p className="mt-4">
              Your entry must be received by the Promoter prior to the Closing
              Date. Entries received after the Closing Date will not be entered
              into the random draw.
            </p>
            <p className="mt-4">
              The Promoter will not acknowledge receipt of your entry nor
              confirm if your answer to the Competition Question is correct.
            </p>
            <p className="mt-4">
              If the number of paid entries reaches any cap or limit before your
              postal entry is received, you will not be entered into the random
              draw.
            </p>
            <p className="mt-4">
              Entrants must have created an account on the Website for the
              postal entry to be processed. All details on the postcard MUST
              correspond to the details on the account to receive the order
              confirmation and ticket number. Postal entries received without a
              registered account cannot be processed.
            </p>
            <p className="mt-4">
              For full terms and conditions,{" "}
              <a href="#" className="text-palette-primary underline">
                Click Here
              </a>
              .
            </p>
          </div>
        )}
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-2 absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <button
          onClick={() => setEntryType("online")}
          className={`px-4 py-2 text-xs font-medium rounded-full transition-colors
            ${
              entryType === "online"
                ? "bg-palette-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          ONLINE ENTRY
        </button>
        <button
          onClick={() => setEntryType("postal")}
          className={`px-4 py-2 text-xs font-medium rounded-full transition-colors
            ${
              entryType === "postal"
                ? "bg-palette-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          FREE POSTAL ENTRY
        </button>
      </div>
    </div>
  );
};

export default QuestionAnswer;
