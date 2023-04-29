import { useState } from "react";
import { postTextReport } from "./services/axiosService";
function App() {
  const [showReportSurvey, setShowReportSurvey] = useState(false);
  const [showTextReportBox, setShowTextReportBox] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleSubmit = (event: React.FormEvent<EventTarget>): void => {
    event.preventDefault();
    console.log("submitting text: ", textAreaValue);
    // send text area respons to backend
    postTextReport(textAreaValue)
      .then((response) => {
        console.log("response: ", response.data);
      })
      .catch((error) => {
        console.log("error in frontend: ", error);
      });

    // reset text area
    setTextAreaValue("");

    // close text report box
    setShowTextReportBox(!setShowTextReportBox);
  };

  return (
    <>
      <h2>Craft Connect</h2>
      <button
        onClick={() => {
          setShowReportSurvey(!showReportSurvey);
        }}
      >
        Create new report
      </button>
      {showReportSurvey && (
        <div>
          <div style={{ height: 200, width: 100, backgroundColor: "#e9e9e9" }}>
            Unfilled report
          </div>
          <div>
            <button
              onClick={() => {
                setShowTextReportBox(!showTextReportBox);
              }}
            >
              text
            </button>
            <button>speech</button>
            <button>image</button>
          </div>
          {showTextReportBox && (
            // align on top of each other
            <div>
              <p>What have you done today?</p>
              <form onSubmit={handleSubmit}>
                <textarea
                  style={{ height: 200, width: 500 }}
                  value={textAreaValue}
                  onChange={(event) => {
                    setTextAreaValue(event.target.value);
                  }}
                ></textarea>
                <div>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
