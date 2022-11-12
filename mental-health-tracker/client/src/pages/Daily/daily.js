import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_RESPONSE } from "../../utils/mutations";
import { QUERY_RESPONSES } from "../../utils/queries";

const EntryForm = () => {
  const [depression, setDepression] = useState(3);
  const [happy, setHappy] = useState(3);
  const [anxiety, setAnxiety] = useState(3);
  const [irritable, setIrritable] = useState(3);
  const [appetite, setAppetite] = useState(3);
  const [sleep, setSleep] = useState(0);
  const [medication, setMedication] = useState("");

  const [addResponse, { error }] = useMutation(ADD_RESPONSE, {
    update(cache, { data: { addResponse } }) {
      try {
        const { responses } = cache.readQuery({ query: QUERY_RESPONSES });

        cache.writeQuery({
          query: QUERY_RESPONSES,
          data: { responses: [addResponse, ...responses] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const recordData = (event) => {
    const { name, value } = event.target;

    setDepression(value.depression);
    setHappy(value.happy);
    setAnxiety(value.anxiety);
    setIrritable(value.irritable);
    setAppetite(value.appetite);
    setSleep(value.sleep);
    setMedication(value.medication);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addResponse({
        variables: {
          depression,
          happy,
          anxiety,
          irritable,
          appetite,
          sleep,
          medication,
        },
      });

      setDepression("");
      setHappy("");
      setAnxiety("");
      setIrritable("");
      setAppetite("");
      setSleep("");
      setMedication("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="d-flex align-items-center text-center card w-100 mt-2 mb-3 pt-3 pb3">
      <main className={"w-50 m-auto p-2"}>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label for="customRange1" class="form-label">
              How depressed did you feel today?
            </label>
            <input
              value={depression}
              onChange={recordData}
              type="range"
              class="form-range"
              min="1"
              max="5"
              step="1"
              id="customRange1"
            ></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How happy did you feel today?
            </label>
            <input
              value={happy}
              onChange={recordData}
              type="range"
              class="form-range"
              min="1"
              max="5"
              step="1"
              id="customRange1"
            ></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How anxious did you feel today?
            </label>
            <input
              value={anxiety}
              onChange={recordData}
              type="range"
              class="form-range"
              min="1"
              max="5"
              step="1"
              id="customRange1"
            ></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How irritable did you feel today?
            </label>
            <input
              value={irritable}
              onChange={recordData}
              type="range"
              class="form-range"
              min="1"
              max="5"
              step="1"
              id="customRange1"
            ></input>
          </div>

          <div>
            <label for="customRange1" class="form-label">
              How was your appetite today?
            </label>
            <input
              value={appetite}
              onChange={recordData}
              type="range"
              class="form-range"
              min="1"
              max="5"
              step="1"
              id="customRange1"
            ></input>
          </div>

          <div class="input-group input-group-sm mb-3">
            <label class="form-label">
              How many hours did you sleep last night?
            </label>
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Hours:
            </span>
            <input
              value={sleep}
              onChange={recordData}
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
                value={medication}
                onChange={recordData}
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

          <button type="submit" className="w-10 btn btn-lg btn-success">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default EntryForm;
