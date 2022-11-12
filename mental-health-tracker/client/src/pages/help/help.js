import React from "react";

export default function Help() {
  return (
    <div className="card d-flex align-items-center text-center w-70 mt-3 pt-3 pb-3">
      <h1 className="mb-3">Need Help </h1>

      <div className="">
        <div className="mb-3 ms-3">
          The 988 Lifeline 988 is now active across the United States. This new,
          shorter phone number will make it easier for people to remember and
          access mental health crisis services. (Please note, the previous
          1-800-273-TALK (8255) number will continue to function indefinitely.)
          Click below to learn more about 988.
        </div>
      </div>
      <div className="">
        <div className="">
          <a href="https://www.aa-meetings.com/" target="_button">
            Find A Local AA meeting{" "}
          </a>
        </div>
      </div>
      <div className="">
        <div className="">
          <a href="https://www.narcotics.com/na-meetings/" target="_button">
            Find A Local NA meeting{" "}
          </a>
        </div>
      </div>
      <div className="">
        <div className="">
          <a href="https://www.lgbthotline.org/" target="_button">
            LGBT National Help Center
          </a>
        </div>
      </div>
    </div>
  );
}
