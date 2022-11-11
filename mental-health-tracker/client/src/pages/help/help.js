import React from "react";

export default function Help() {
    return (
        <div>
            <h1>Need Help </h1>

            <div className="card">
                <div className="card-body">
                    The 988 Lifeline

                    988 is now active across the United States.
                    This new, shorter phone number will make it easier for people to remember and access mental health crisis services.
                    (Please note, the previous 1-800-273-TALK (8255) number will continue to function indefinitely.)
                    Click below to learn more about 988.
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <a href="https://www.aa-meetings.com/" target="_button">Find A Local AA meeting </a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <a href="https://www.narcotics.com/na-meetings/" target="_button">Find A Local NA meeting </a>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <a href="https://www.lgbthotline.org/" target="_button">LGBT National Help Center</a>
                </div>
            </div>
        </div>
    );

}
