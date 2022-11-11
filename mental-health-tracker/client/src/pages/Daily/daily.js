import React, { FormEvent, useState } from "react";
// import styles from "../../pages/styles.module.css";

const recordData = () => {
  const handleFormSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <main className={"w-100 m-auto p-2"}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label for="customRange1" class="form-label">
              How depressed did you feel today?
            </label>
            <input type="range" class="form-range" id="customRange1"></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How happy did you feel today?
            </label>
            <input type="range" class="form-range" id="customRange1"></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How anxious did you feel today?
            </label>
            <input type="range" class="form-range" id="customRange1"></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How irritable did you feel today?
            </label>
            <input type="range" class="form-range" id="customRange1"></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How was your appetite today?
            </label>
            <input type="range" class="form-range" id="customRange1"></input>
          </div>

          <div class="input-group input-group-sm mb-3">
            <label class="form-label">
              How many hours did you sleep last night?
            </label>
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Hours:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            ></input>
          </div>

          <div>
            <label class="form-label">
              Did you take your medication today?
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              ></input>
              <label class="form-check-label" for="flexRadioDefault2">
                No
              </label>
            </div>
          </div>

          <div class="input-group">
            <span class="input-group-text">Notes:</span>
            <textarea
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </form>
      </main>
    </div>
  );
};

export default recordData;
