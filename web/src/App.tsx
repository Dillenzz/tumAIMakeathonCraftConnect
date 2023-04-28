import { useState } from "react";
function App() {
  const [showReportSurvey, setShowReportSurvey] = useState(false);
  const [showTextReportBox, setShowTextReportBox] = useState(false);

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

              <textarea style={{ height: 200, width: 500 }}></textarea>
              <div>
                <button
                  onClick={() => {
                    setShowReportSurvey(!showTextReportBox);
                  }}
                >
                  submit
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
