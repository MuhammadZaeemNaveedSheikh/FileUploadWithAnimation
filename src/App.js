import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [state, setState] = useState("waiting");
  return (
    <div className="App" >
      <header className="App-header" >
        <div>
          <h1
            style={{
              color: "white",
            }}
          >
            Patic
          </h1>
          {state === "waiting" && (
            <div id="file_input_box" >
              <div>
                <h3>Upload your clips</h3>
                <h6>MP4, MOV and FLV are allowed</h6>
                <p>1GB Max Upload Size</p>
              </div>
              <div
                id="upload_input"
                onClick={() => {
                  const fileUpload = document.querySelector("#file_upload");
                  fileUpload.click();
                }}
              >
                <i class="fa-solid fa-file-arrow-up"></i>
                <p>Drag and Drop or browse to choose the file</p>
                <input
                  id="file_upload"
                  type="file"
                  hidden
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                    setState("uploading");
                  }}
                />
              </div>
            </div>
          )}
          {(state == "uploaded" || state == "uploading") && (
            <div id="uploading">
              <div
                id={state == "uploading" ? "progress_bar_animated" : ""}
                class="progress_bar"
                onAnimationEnd={() => setState("uploaded")}
              ></div>
              <h5>
                {state == "uploading"
                  ? "Uploading..."
                  : "https://share.patic.io/4b2Ca"}
              </h5>
              <p>{state == "uploading" ? "0MB/S" : ""}</p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
